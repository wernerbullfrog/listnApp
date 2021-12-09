export const handleSubmit = (e, formData, roomType) => {
  e.preventDefault();
  fetch(`/api/${roomType}`, {
    method: "POST",
    body: JSON.stringify(formData),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((json) => {
      const { status, error } = json;
      console.log("status: ", status, "Error:", error);
    })
    .catch(console.log("error has occured"));
};
