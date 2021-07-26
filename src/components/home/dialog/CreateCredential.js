import React, { useState } from "react";

// import css
import "../../../assets/css/create_credential.css";

// import icon ?
import ic_loading from "../../../assets/img/ic_loading.svg";

// import get context
import { GetContext } from "../../../utils/ContentProvider";

function CreateCredential() {
  const { createCredential, setToast } = GetContext();
  const [error, setError] = useState({});
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [phone, setPhone] = useState();

  const [isLoading, setIsLoading] = useState(false);

  const handleCredential = async () => {
    const error = {};
    if (!firstName) {
      error.firstName = "first name can't be empty";
    }

    if (!lastName) {
      error.lastName = "last name can't be empty";
    }

    if (!phone) {
      error.phone = "phone number can't be empty";
    } else if (phone.length < 11) {
      error.phone = "enter valid phone number";
    }

    if (Object.keys(error).length > 0) {
      return setError(error);
    }
    setIsLoading(true);
    const verifyCredential = await createCredential(firstName, lastName, phone);

    if (verifyCredential) {
      setToast({
        type: "success",
        text: "Credential Created!",
      });
      setIsLoading(false);
    } else {
      setIsLoading(false);
    }
    console.log(verifyCredential);
  };

  return (
    <div className="create_credential_area">
      <h1>CreateCredential</h1>
      <p>To create credential, please provide below information to verify</p>
      <input
        className={error.firstName && "error_border"}
        type="text"
        placeholder="first name"
        onChange={(e) => setFirstName(e.target.value)}
      />

      <div
        className={error.firstName ? "error_text error_visible" : "error_text"}
      >
        <small>{error.firstName}!</small>
      </div>

      <input
        className={error.lastName && "error_border"}
        type="text"
        placeholder="last name"
        onChange={(e) => setLastName(e.target.value)}
      />

      <div
        className={error.lastName ? "error_text error_visible" : "error_text"}
      >
        <small>{error.lastName}!</small>
      </div>

      <input
        className={error.phone && "error_border"}
        type="text"
        placeholder="phone number"
        onChange={(e) => setPhone(e.target.value)}
      />

      <div className={error.phone ? "error_text error_visible" : "error_text"}>
        <small>{error.phone}!</small>
      </div>

      <button disabled={isLoading} onClick={handleCredential}>
        <span className={isLoading ? "visibility_hidden" : undefined}>
          Create
        </span>
        {isLoading && (
          <div>
            <img src={ic_loading} alt="loading" width={20} height={20} />
            <p>Processing</p>
          </div>
        )}
      </button>
    </div>
  );
}

export default CreateCredential;
