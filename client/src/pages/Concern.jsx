const Concern = () => {
  return (
    <>
      <form action="/submit-concern" method="POST" />
      <label for="name">Name:</label>
      <br />
      <input type="text" id="name" name="name" required />
      <br />

      <label for="phone">Phone:</label>
      <br />
      <input type="tel" id="phone" name="phone" required />
      <br />

      <label for="message">Message:</label>
      <br />
      <textarea id="message" name="message" required></textarea>
      <br />

      <label for="address">Address:</label>
      <br />
      <input type="text" id="address" name="address" required />
      <br />

      <label for="department">Department:</label>
      <br />
      <input type="text" id="department" name="department" required />
      <br />

      <input type="submit" value="Submit" />
      <form />
    </>
  );
};

export default Concern;
