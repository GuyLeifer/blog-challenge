import React, { useEffect, useRef, useState } from 'react';
import './Comment.css';
import ErrorBoundary from '../ErrorBoundary';
import { useRecoilState } from 'recoil';
import { commentsFirstDivState, commentsSecondDivState, commentsThirdDivState, commentsFourthDivState } from '../../Atoms/Atoms';

function Comment(props) {
    const number = props.number;
    
      // states
  const [firstName, setFirstName] = useState()
  const [lastName, setLastName] = useState()
  const [email, setEmail] = useState()
  // const [password, setPassword] = useState()
  const [title, setTitle] = useState();
  const [text, setText] = useState();
  
  //setStates - Recoil
  const [commentsFirstDiv, setCommentsFirstDiv] = useRecoilState(commentsFirstDivState);
  const [commentsSecondDiv, setCommentsSecondDiv] = useRecoilState(commentsSecondDivState);
  const [commentsThirdDiv, setCommentsThirdDiv] = useRecoilState(commentsThirdDivState);
  const [commentsFourthDiv, setCommentsFourthDiv] = useRecoilState(commentsFourthDivState);
  
  // comments state
  const [comments, setComments] = useState();

    // if (number === "First") setComments(commentsFirstDiv);
    // if (number === "Second") setComments(commentsSecondDiv);
    // if (number === "Third") setComments(commentsThirdDiv);
    // if (number === "Fourth") setComments(commentsFourthDiv);

  // refs
  const inputFirstNameRef = useRef();
  const inputLastNameRef = useRef();
  const inputEmailRef = useRef();
  const inputTitleRef = useRef();
  const inputTextRef = useRef();
  const inputSubmitRef = useRef();

  // functions
  useEffect( () => {
    inputFirstNameRef.current.focus();
  },[]);

  const onKeyUp = (e, txt) => {
    if (e.keyCode === 13) {
        switch (txt) {
            case "firstName":
                inputLastNameRef.current.focus();
                break;
            case "lastName":
                inputEmailRef.current.focus();
                if (inputFirstNameRef.current.value !== "" &&
                    inputLastNameRef.current.value !== "") {
                    alert("Hello, " + inputFirstNameRef.current.value + " " + e.target.value +"!");
                }
                break;
            case "email":
                inputTitleRef.current.focus();
                if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(e.target.value)) {
                    alert(email + ' is not a valid email');
                }
                break;
            case "title":
                inputTextRef.current.focus();
                break;
            case "text":
                inputSubmitRef.current.focus();
                break;          
      } 
    }
  }

  const onChange = (e, txt) => {
    switch (txt) {
        case "firstName":
            setFirstName(e.target.value);
            break;
        case "lastName":
            setLastName(e.target.value);
            break;
        case "email":
            setEmail(e.target.value)
            break;
        case "title":
            setTitle(e.target.value)
            break;
        case "text":
            setText(e.target.value)
            break;
    } 
  }

  const onSubmit = (number) => {
    if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)) {
        alert(email + ' is not a valid email');
    }
    else {
        const user = {
          firstName: firstName,
          lastName: lastName,
          email: email,
          title: title,
          text: text
        }
        if (
            inputFirstNameRef.current.value !== "" &&
            inputLastNameRef.current.value !== "" &&
            inputEmailRef.current.value !== "" &&
            inputTitleRef.current.value !== "" &&
            inputTextRef.current.value !== "" 
        ) {
            switch (number) {
                case "First":
                    setComments([...commentsFirstDiv, user]);
                    setCommentsFirstDiv([...commentsFirstDiv, user]);
                    console.log("comments: ", comments)
                    break; 
                case "Second":
                    setComments([...commentsSecondDiv, user]);
                    setCommentsSecondDiv([...commentsSecondDiv, user]);
                    console.log("comments: ", comments)
                    break; 
                case "Third":
                    setComments([...commentsThirdDiv, user]);
                    setCommentsThirdDiv([...commentsThirdDiv, user]);
                    console.log("comments: ", comments)
                    break; 
                case "Fourth":
                    setComments([...commentsFourthDiv, user]);
                    setCommentsFourthDiv([...commentsFourthDiv, user]);
                    console.log("comments: ", comments)
                    break; 
            }
        }
    
        setFirstName(null)
        setLastName(null)
        setEmail(null)
        setTitle(null)
        setText(null)
    
        inputFirstNameRef.current.value = "";
        inputLastNameRef.current.value = "";
        inputEmailRef.current.value = "";
        inputTitleRef.current.value = "";
        inputTextRef.current.value = "";
        inputSubmitRef.current.value = "";
    }

  }

    return (
        <ErrorBoundary>
            <div className="commentsDiv"> 
                {comments && (
                    <div className="comments">
                        <h3>Comments:</h3>
                        <ol>
                            {comments.map(comment => { 
                                return (
                                    <li>
                                        <span className="firstNameSpan">{comment.firstName}</span>
                                        <span className="lastNameSpan">{comment.lastName}</span>
                                        {/* <span className="emailSpan">{comment.email}</span> */}
                                        <span className="titleSpan">{comment.title}</span>
                                        <span className="textSpan">{comment.text}</span>
                                    </li>
                                )
                            })}
                        </ol>
                    </div>
                )}

                <ErrorBoundary>
                    <div className="comment">
                        <h3>Add a Comment</h3>
                        <ErrorBoundary>
                            <div className="form__group field">
                                <ErrorBoundary>
                                    <label htmlFor={inputFirstNameRef} className="form__label">First Name*: </label>
                                    <input ref={inputFirstNameRef} 
                                          placeholder="First Name" 
                                          onKeyUp={ (e) => onKeyUp(e, "firstName") }
                                          onChange={ (e) => onChange(e, "firstName") }
                                          className="form__field"
                                          />
                                    
                                </ErrorBoundary>
                                <ErrorBoundary>
                                    <label htmlFor={inputLastNameRef} className="form__label">Last Name*: </label>
                                    <input ref={inputLastNameRef} 
                                          placeholder="Last Name" 
                                          onKeyUp={ (e) => onKeyUp(e, "lastName") }
                                          onChange={ (e) => onChange(e, "lastName") }
                                          className="form__field"
                                          />
                                    
                                </ErrorBoundary>
                                <ErrorBoundary>
                                    <label htmlFor={inputEmailRef} className="form__label">Email*: </label>
                                    <input ref={inputEmailRef} 
                                          type="email"
                                          placeholder="Email" 
                                          onKeyUp={ (e) => onKeyUp(e, "email") }
                                          onChange={ (e) => onChange(e, "email") }
                                          className="form__field"
                                          />
                                    
                                </ErrorBoundary>
                                <ErrorBoundary>
                                    <label htmlFor={inputTitleRef} className="form__label">Title*: </label>
                                    <input ref={inputTitleRef} 
                                          placeholder="Title" 
                                          onKeyUp={ (e) => onKeyUp(e, "title") }
                                          onChange={ (e) => onChange(e, "title") }
                                          className="form__field"
                                          />
                                    
                                </ErrorBoundary> 
                                <ErrorBoundary>   
                                    <label htmlFor={inputTextRef} className="form__label">Text*: </label>
                                    <textarea ref={inputTextRef} 
                                          placeholder="write your comment here..." 
                                          rows="4" cols="50"
                                          onKeyUp={ (e) => onKeyUp(e, "text") }
                                          onChange={ (e) => onChange(e, "text") }
                                          className="form__field"
                                          />
                                    
                                </ErrorBoundary>
                                <ErrorBoundary>
                                    <input ref={inputSubmitRef}
                                          type="submit"
                                          value="Send"
                                          onClick={ () => onSubmit(number) }
                                          className="submitButton"
                                          />
                                  </ErrorBoundary>
                            </div>
                        </ErrorBoundary>
                    </div>
                </ErrorBoundary>
            </div>
        </ErrorBoundary>
    )
}

export default Comment
