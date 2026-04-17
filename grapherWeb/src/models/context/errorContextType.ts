export type ErrorContextType = {
    errorMessage: string
    setErrorMessage: React.Dispatch<React.SetStateAction<string>>;
    warningMessage: string
    setWarningMessage: React.Dispatch<React.SetStateAction<string>>;
};