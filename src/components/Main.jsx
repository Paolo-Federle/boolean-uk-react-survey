import { useState } from "react";

function Main() {
  const [open, setOpen] = useState(false); //Ignore this state

  const [reviewText, setReviewtext] = useState("")
  const [userName, setUserName] = useState("")
  const [email, setEmail] = useState("")
  const [radio, setRadio] = useState("")
  const [checkbox, setCheckbox] = useState([])

  const [checkboxOneCheck, setCheckboxOneCheck] = useState(false)
  const [checkboxTwoCheck, setCheckboxTwoCheck] = useState(false);
  const [checkboxThreeCheck, setCheckboxThreeCheck] = useState(false);
  const [checkboxFourCheck, setCheckboxFourCheck] = useState(false);



  function handleReviewText(event) {
    setReviewtext(event.target.value)
  }

  function handleUserName(event) {
    setUserName(event.target.value)
  }

  function handleEmail(event) {
    setEmail(event.target.value)
  }

  function handleRadio(event) {
    setRadio(event.target.value)
  }


  function handleCheckbox(event) {
    if (checkbox.includes(event.target.value)) {
      let checkList = checkbox.filter(function(item){
        return item !== event.target.value}
        )
      setCheckbox(checkList)
    } else {
      let checkList = checkbox
      checkList.push(event.target.value)
      setCheckbox(checkList)
      console.log(checkbox)
    }
  }

  function changeCheckboxOneCheck() {
    setCheckboxOneCheck(!checkboxOneCheck)
  }

  function changeCheckboxTwoCheck() {
    setCheckboxTwoCheck(!checkboxTwoCheck)
  }

  function changeCheckboxThreeCheck() {
    setCheckboxThreeCheck(!checkboxThreeCheck)
  }

  function changeCheckboxFourCheck() {
    setCheckboxFourCheck(!checkboxFourCheck)
  }

  const resetForm = () => {
    setReviewtext("")
    setUserName("")
    setEmail("")
    setRadio("")
    setCheckbox([])
  }

  const submitForm = (event) => {
    event.preventDefault();
    const submitData = {
      reviewText: reviewText,
      userName: userName,
      email: email,
      radio: radio,
      checkbox: checkbox
    }
    resetForm()
    console.log(submitData)
  }

  return (
    <main className="main">
      <section className={`main__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        {/* answers should go here */}
      </section>
      <section className="main__form">

        <form className="form" onSubmit={submitForm}>
          <h2>Tell us what you think about your rubber duck!</h2>
          <div className="form__group radio">
            <h3>How do you rate your rubber duck colour?</h3>

            <ul>
              <li>
                <input id="color-one" type="radio" name="color" value="1" onChange={handleRadio} /><label
                  htmlFor="color-one"
                >1</label
                >
              </li>
              <li>
                <input id="color-two" type="radio" name="color" value="2" onChange={handleRadio} /><label
                  htmlFor="color-two"
                >2</label
                >
              </li>
              <li>
                <input id="color-three" type="radio" name="color" value="3" onChange={handleRadio} /><label
                  htmlFor="color-three"
                >3</label
                >
              </li>
              <li>
                <input id="color-four" type="radio" name="color" value="4" onChange={handleRadio} /><label
                  htmlFor="color-four"
                >4</label
                >
              </li>
            </ul>

          </div>
          <div className="form__group">
            <h3>How do you like to spend time with your rubber duck</h3>

            <ul>
              <li>
                <label
                ><input
                    name="spend-time"
                    type="checkbox"
                    value="swimming"
                    onChange={handleCheckbox}
                    onClick={changeCheckboxOneCheck}
                    checked={checkboxOneCheck}
                  />Swimming</label
                >
              </li>
              <li>
                <label
                ><input name="spend-time" type="checkbox" onClick={changeCheckboxTwoCheck} checked={checkboxTwoCheck} value="bathing" onChange={handleCheckbox} />Bathing</label
                >
              </li>
              <li>
                <label
                ><input
                    name="spend-time"
                    type="checkbox"
                    value="chatting"
                    onChange={handleCheckbox}
                    onClick={changeCheckboxThreeCheck}
                    checked={checkboxThreeCheck}
                  />Chatting</label
                >
              </li>
              <li>
                <label
                ><input name="spend-time" type="checkbox" onClick={changeCheckboxFourCheck} checked={checkboxFourCheck} value="noTime" onChange={handleCheckbox} />I don't like to
                  spend time with it</label
                >
              </li>
            </ul>

          </div>
          <label>What else have you got to say about your rubber duck?
            <textarea name="review" cols="30" rows="10" value={reviewText} onChange={handleReviewText}>
            </textarea>
          </label>
          <label>Put your name here (if you feel like it):
            <input type="text" name="username" value={userName} onChange={handleUserName} /></label>
          <label>Leave us your email pretty please??<input
            type="email"
            name="email"
            value={email}
            onChange={handleEmail} />
          </label>
          <input className="form__submit" type="submit" value="Submit Survey!" />
        </form>

      </section>
    </main>
  );
}

export default Main;
