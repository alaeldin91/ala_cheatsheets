// Forms + Validations

// Phone number:
// npm i react-phone-number-input
import PhoneInput, {
  isValidPhoneNumber,
  parsePhoneNumber,
} from "react-phone-number-input";
import "react-phone-number-input/style.css";

// Template
<PhoneInput
  required
  international
  countryCallingCodeEditable={false}
  defaultCountry="AE"
  className={classNames(
    styles.input,
    !isValidPhone && phone && phone.length && styles.redInput,
    isValidPhone && styles.greenInput
  )}
  value={phone}
  onChange={setPhone}
/>

// Validation
if (phone === "") {
  toast.error("Phone number is required.", {
    position: "bottom-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: false,
    progress: undefined,
    theme: "colored",
  });
  return;
}
if (isValidPhoneNumber(phone) === false) {
  toast.error("Enter Valid Phone Number.", {
    position: "bottom-center",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: false,
    progress: undefined,
    theme: "colored",
  });
  return;
}

// useEffect
useEffect(() => {
  if (phone && phone.length) {
    if (isValidPhoneNumber(phone)) {
      setIsValidPhone(true);
    } else {
      setIsValidPhone(false);
    }
  } else {
    setIsValidPhone(false);
  }
}, [phone]);