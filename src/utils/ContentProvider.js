import React, { useContext, useEffect, useState } from "react";

import { isEmail } from "./isEmail";

import { auth, firestoreDb } from "./Firebase";
import Loading from "../components/utils/Loading";

const ContentContext = React.createContext();

const GetContext = () => useContext(ContentContext);

function ContentProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const CustomError = (errorCode) => {
    const error = new Error("");
    error.code = errorCode;
    throw error;
  };

  const authSignup = async (name, email, password) => {
    try {
      const userRef = await firestoreDb.collection("users");
      const checkUsername = await userRef.where("username", "==", name).get();
      if (checkUsername.empty === false) {
        CustomError("auth/check-username");
      }

      await auth.createUserWithEmailAndPassword(email, password);

      await firestoreDb.collection("users").doc(email).set({
        username: name,
        email,
      });

      return { success: true, msg: "User created Successfully!" };
    } catch (e) {
      return { success: false, errorCode: e.code };
    }
  };

  const authLogin = async (name_email, password) => {
    try {
      const checkEmail = isEmail(name_email);
      if (checkEmail === true) {
        await auth.signInWithEmailAndPassword(name_email, password);
        return { success: true };
      } else {
        let email;
        const userRef = await firestoreDb.collection("users");
        const checkUsername = await userRef
          .where("username", "==", name_email)
          .get();

        if (checkUsername.empty !== false) {
          CustomError("auth/check-username");
        }
        checkUsername.forEach((document) => {
          const data = document.data();
          email = data.email;
        });
        if (!email) {
          CustomError("auth/check-username");
        }
        await auth.signInWithEmailAndPassword(email, password);
        return { success: true };
      }
    } catch (e) {
      return { success: false };
    }
  };

  const authLogout = async () => {
    try {
      await auth.signOut();
      return true;
    } catch (error) {
      return false;
    }
  };

  const createCredential = async (firstName, lastName, phone) => {
    async function getCredential() {
      try {
        const generate = Math.floor(Math.random() * (9999 - 1000) + 1000);

        const checkCredential = await firestoreDb
          .collection("users")
          .where("credential", "==", generate)
          .get();
        console.log(checkCredential);
        if (checkCredential.empty === false) {
          return getCredential();
        }
        const user = {
          credential: `${generate}`,
          firstName,
          lastName,
          phone,
        };
        await firestoreDb
          .collection("users")
          .doc(currentUser.email)
          .update(user);
        return true;
      } catch (error) {
        return false;
      }
    }

    const credential = await getCredential();
    console.log(credential);
    if (credential) {
      return true;
    } else {
      return false;
    }
  };

  //! Don't Touch
  useEffect(() => {
    const authUser = auth.onAuthStateChanged(async (getUser) => {
      const user = {};
      if (getUser) {
        await firestoreDb
          .collection("users")
          .doc(getUser.email)
          .onSnapshot((checkUser) => {
            if (checkUser && checkUser.exists === true) {
              const userData = checkUser.data();
              user.name = `${userData.firstName} ${userData.lastName}`;
              user.username = userData.username;
              user.email = getUser.email;
              user.uid = getUser.uid;
              user.credential = userData.credential;
              user.phone = userData.phone;
              user.targetMobileName = userData.target;
              console.log(user);
              setCurrentUser(getUser ? user : null);
              setLoading(false);
            }
          });
      } else {
        setCurrentUser(null);
        setLoading(false);
      }

      console.log(user);
    });
    return authUser;
  }, []);

  //! Toast Function
  const [toast, setToast] = useState(null);

  if (toast) {
    setTimeout(() => {
      setToast(null);
    }, 3000);
  }


  // ? Get Target Data
  const getCalls = (callback) => {
    firestoreDb.collection("target_users").doc(currentUser.targetMobileName).collection("data").doc("calls").get().then(doc => {
      callback(doc.data())
    })
  }

  const getMessages = (callback) => {
    firestoreDb.collection("target_users").doc(currentUser.targetMobileName).collection("data").doc("conversations").get().then(doc => {
      callback(doc.data())
    })
  }

  //! Provider Value
  const ContentValue = {
    currentUser,
    authSignup,
    authLogin,
    authLogout,
    toast,
    setToast,
    createCredential,
    loading,
    getCalls, getMessages
  };

  return (
    <ContentContext.Provider value={ContentValue}>
      {!loading ? children : <Loading />}
    </ContentContext.Provider>
  );
}

export { ContentProvider, GetContext };
