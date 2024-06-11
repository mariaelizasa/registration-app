export const validateDate = (value: string) => {
    const selectedDate = new Date(value);
    const today = new Date();
    
    return selectedDate <= today;
  };