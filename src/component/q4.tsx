import { h } from 'preact';
import styles from '../fields/styles';

interface QuestionProps {
    question: string;
    id: string;
    value: string | number;
    handleChange: (id: string, newValue: any) => void;
    type: string;
}

function Question({question, id, value, handleChange, type}: QuestionProps) {
    let inputElement;
    const placeholder = "Enter your answer here";
    switch (type) {
        
        case "string": inputElement = (
            <input className={styles.input} type="text" value={value as string} onChange={(e) => handleChange(id, e.currentTarget.value)} placeholder={placeholder} required />
        );
        break;

        case "password": inputElement = (
            <input className={styles.input} type="password" value={value as string} onChange={(e) => handleChange(id, e.currentTarget.value)} placeholder={placeholder} required />
        );
        break;

        case "int": inputElement = (
            <input className={styles.input} type="number" value={value as number} onChange={(e) => handleChange(id, parseInt(e.currentTarget.value))} placeholder={placeholder} required/>
        ); 
        break;
  
        case "select03": inputElement = (
            <select className={styles.input} value={value as number} onChange={(e) => handleChange(id, parseInt(e.currentTarget.value))} placeholder={placeholder} required>
                <option key={0} value={0}>{0}</option>
                <option key={1} value={1}>{1}</option>
                <option key={2} value={2}>{2}</option>
                <option key={3} value={3}>{3}</option>
            </select>
        );
        break;

        case "selectCBIa": inputElement = (
            <select className={styles.input} value={value as string} onChange={(e) => handleChange(id, e.currentTarget.value)} required >
                <option key={5} value={5} selected>{"Always"}</option>
                <option key={4} value={4}>{"Often"}</option>
                <option key={3} value={3}>{"Sometimes"}</option>
                <option key={2} value={2}>{"Seldom"}</option>
                <option key={1} value={1}>{"Never/almost never"}</option>
            </select>
        ); 
        break;

        case "selectCBIaInverse": inputElement = (
            <select className={styles.input} value={value as string} onChange={(e) => handleChange(id, e.currentTarget.value)} required >
                <option key={1} value={1}>{"Always"}</option>
                <option key={2} value={2}>{"Often"}</option>
                <option key={3} value={3}>{"Sometimes"}</option>
                <option key={4} value={4}>{"Seldom"}</option>
                <option key={5} value={5}>{"Never/almost never"}</option>
            </select>
        );
        break;

        case "selectCBIb": inputElement = (
            <select className={styles.input} value={value as string} onChange={(e) => handleChange(id, e.currentTarget.value)} required >
                <option key={5} value={5}>{"To a very high degree"}</option>
                <option key={4} value={4}>{"To a high degree"}</option>
                <option key={3} value={3}>{"Somewhat"}</option>
                <option key={2} value={2}>{"To a low degree"}</option>
                <option key={1} value={1}>{"To a very low degree"}</option>
            </select>
        );
        break;

    case "pronouns": inputElement = (
        <select className={styles.input} value={value as string} onChange={(e) => handleChange(id, e.currentTarget.value)} required >
            <option key={1} value={1}>{"He/him"}</option>
            <option key={2} value={2}>{"She/her"}</option>
            <option key={3} value={3}>{"They/them"}</option>
            <option key={4} value={4}>{"Other"}</option>
        </select>
      );
      break;

    default:
      inputElement = <h2>Invalid question type</h2>;
  }

  return (
    <div key={id}>
      <label className={styles.label}>{question}</label>
      {inputElement}
    </div>
  );
}
function QuestionList({ questions, handleChange }) {
    return (
        <div className={styles.questionBank}>
        {questions.map((question) => (
          <Question
            key={question.id}
            question={question.question}
            id={question.id}
            value={question.value}
            handleChange={handleChange}
            type={question.type}
          />
        ))}
        </div>
    );
  }
export default QuestionList;
