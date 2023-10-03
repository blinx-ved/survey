
import { h, render, Component } from 'preact';
import { useCallback, useState } from 'preact/hooks';
import QuestionList from './component/q4';
import styles from './fields/styles'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAAlnKsN5JexheWjXoh5f_j5k3O4SFJK4A",
  authDomain: "survey-c5c53.firebaseapp.com",
  projectId: "survey-c5c53",
  storageBucket: "survey-c5c53.appspot.com",
  messagingSenderId: "333655192242",
  appId: "1:333655192242:web:3caac240a8e74b1574cfab",
  measurementId: "G-CC94PN6RNM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


const dassyQuestions = [
    {type: "select03", key: "S", question: "I got upset about little things?" },
    {type: "select03", key: "A", question: "I felt dizzy, like I was about to faint?" },
    {type: "select03", key: "D", question: "I did not enjoy anything?" },
    {type: "select03", key: "A", question: "I had trouble breathing (e.g. fast breathing), even though I wasn't exercising and I was not sick?" },
    {type: "select03", key: "D", question: "I hated my life?" },
    {type: "select03", key: "S", question: "I found myself over-reacting to situations?" },
    {type: "select03", key: "A", question: "My hands felt shaky?" },
    {type: "select03", key: "S", question: "I was stressing about lots of things?" },
    {type: "select03", key: "A", question: "I felt terrified?" },
    {type: "select03", key: "D", question: "There was nothing nice I could look forward to?" },
    {type: "select03", key: "S", question: "I was easily irritated?" },
    {type: "select03", key: "S", question: "I found it difficult to relax?" },
    {type: "select03", key: "D", question: "I could not stop feeling sad?" },
    {type: "select03", key: "S", question: "I got annoyed when people interrupted me?" },
    {type: "select03", key: "A", question: "I felt like I was about to panic?" },
    {type: "select03", key: "D", question: "I hated myself?" },
    {type: "select03", key: "D", question: "I felt like I was no good?" },
    {type: "select03", key: "S", question: "I was easily annoyed?" },
    {type: "select03", key: "A", question: "I could feel my heart beating really fast, even though I hadn't done any hard exercise?" },
    {type: "select03", key: "A", question: "I felt scared for no good reason?" },
    {type: "select03", key: "D", question: "I felt that life was terrible?" }
]  
const stressorQuestions = [
    {type: "select03", key: "a", question: "Difficult Course load (normal and/or AP/IB classes)" },
    {type: "select03", key: "a", question: "Time Intensive Course load (homework)" },
    {type: "select03", key: "a", question: "Extracurricular activities (clubs, sports, etc.)" },
    {type: "select03", key: "a", question: "The college application process (Includes ACT/SAT, College essays)" },
    {type: "select03", key: "a", question: "Concerns about future decisions (college and career choices)" },
    {type: "select03", key: "a", question: "Interacting with friends and peers (relationship issues, peer pressure, etc.)" },
    {type: "select03", key: "a", question: "Job/work responsibilities" },
]  
const demoQuestions = [
    {type: "pronouns", key: "a", question: "What are your pronouns?" },
    {type: "int", key: "a", question: "How old are you?" },
    {type: "int", key: "a", question: "What grade are you in?" },
    {type: "string", key: "a", question: "If affiliated with the LGBTQ+ community, How would you diescribe your affiliation?" },
    {type: "string", key: "a", question: "How would you describe your living situation i.e.(living with both parents, split custody between parents, living with grandparents)?" },
    {type: "string", key: "a", question: "Has wellness wednesday has helped you mangage your stress?" },
]  
const academicQuestions = [
  {type: "int", key: "a", question: "What is your GPA? This can be found in portal under grades, If you dont know please input 0." },
  {type: "int", key: "a", question: "Please give an estimate of the number of hours you spend per week on homework/classwork outside of class?" },
  {type: "int", key: "a", question: "How many AP/IB classes are you taking?" },
  {type: "int", key: "a", question: "How many Honors/Pre-IB classes are you taking?" },
  {type: "int", key: "a", question: "How many traditional classes are you taking?" },
  {type: "string", key: "a", question: "Please give an estimate of the number of hours you spend per week on extracurriculars? (include time working if employed)" },
  {type: "string", key: "a", question: "What extracurriculars do you participate in. Please format like the following: (Football-2hrs, HOSA-1hrs)" },
]

const CBIQuestions = [
    {type: "selectCBIa", key: "p", question: "How often do you feel tired?" },
    {type: "selectCBIa", key: "p", question: "How often are you physically exhausted?" },
    {type: "selectCBIa", key: "p", question: "How often are you emotionally exhausted?" },    {type: "selectCBIa", key: "p", question: `How often do you think: "I can't take it anymore"?` },
    {type: "selectCBIa", key: "p", question: "How often do you feel worn out?" }, 
    {type: "selectCBIa", key: "p", question: "How often do you feel weak and susceptible to illness?" }, 
    {type: "selectCBIa", key: "w", question: "Do you feel worn out at the end of the working day?" }, 
    {type: "selectCBIa", key: "w", question: "Are you exhausted in the morning at the thought of another day at work?" }, 
    {type: "selectCBIa", key: "w", question: "Do you feel that every working hour is tiring for you?" }, 
    {type: "selectCBIaInverse", key: "w", question: "Do you have enough energy for family and friends during leisure time?" }, 
    {type: "selectCBIb", key: "w", question: "Is your work emotionally exhausting?"},
    {type: "selectCBIb", key: "w", question: "Does your work frustrate you?" }, 
    {type: "selectCBIb", key: "w", question: "Do you feel burnt out because of your work?" }
] 
const password = [
  {type: "string", key: "a", question: "Create a password so we can securely track your results." },
] 
function initializeQuestionObjects(questions) {
    return questions.map((question) => ({
      ...question,
      id: self.crypto.randomUUID(),
      value: null
    }));
}
  
function ProqolForm() {    
    const [stressorQuestionObjects, setStressorQuestionObjects] = useState(
        initializeQuestionObjects(stressorQuestions)
    );
    const [demoQuestionObjects, setDemoQuestionObjects] = useState(
        initializeQuestionObjects(demoQuestions)
    );
    const [dassyQuestionObjects, setDassyQuestionObjects] = useState(
      initializeQuestionObjects(dassyQuestions)
    );
    const [CBIpersonalQuestionObjects, setCBIpersonalQuestionObjects] = useState(
      initializeQuestionObjects(CBIQuestions)
    );
    const [academicQuestionObjects, setAcademicQuestionObjects] = useState(
      initializeQuestionObjects(academicQuestions)
    );
    const [passwordQuestionObjects, setPasswordQuestionObjects] = useState(
      initializeQuestionObjects(password)
    );


  const handleChange = useCallback((id, newValue, questionObjects, setQuestionObjects) => {
    setQuestionObjects((prev) =>
      prev.map((question) => (question.id === id ? { ...question, value: newValue } : question))
    );
  }, []);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      let dassYS = 0;
      let dassYA = 0;
      let dassYD = 0;
      dassyQuestionObjects.forEach(dassyQuestionObject => {
        switch(dassyQuestionObject.key) {
          case "S":
            dassYS += dassyQuestionObject.value;
            break;
          case "A":
            dassYA += dassyQuestionObject.value;
            break;
          case "D":
            dassYD += dassyQuestionObject.value;
            break;
        }
      });

      let CBI_PB = 0;
      let CBI_WB = 0;
      CBIpersonalQuestionObjects.forEach(CBIpersonalQuestionObject => {
        switch(CBIpersonalQuestionObject.key) {
          case "p":
            CBI_PB += CBIpersonalQuestionObject.value;
            break;
          case "w":
            CBI_WB += CBIpersonalQuestionObject.value;
            break;
        }
      });

      console.log("Demo Questions:", demoQuestionObjects);
      console.log("Stressor Questions:", stressorQuestionObjects);

      console.log("DASSY S:", dassYS, "DASSY A:", dassYA, "DASSY D:", dassYD);
      console.log("Dassy Questions:", dassyQuestionObjects);

      console.log("CBI PB:", CBI_PB, "CBI WB:", CBI_WB);
      console.log("CBI Questions:", CBIpersonalQuestionObjects);


      console.log("Academic Questions:", academicQuestionObjects);
      console.log("Password:", passwordQuestionObjects);
    };
  
    return (
      <form className="w-full mx-auto md:max-w-xl px-2" onSubmit={handleSubmit}>
        <h1 className="text-2xl font-semibold mb-2 text-gray-80">Form</h1>
        <section className={styles.formSection}>
            <div className={styles.formHeader}>
                <p className={styles.formHeaderText}>Answer theses demographic to the best of your ability.</p>
            </div>
        <QuestionList
          questions={demoQuestionObjects}
          handleChange={(id, newValue) =>
            handleChange(id, newValue, demoQuestionObjects, setDemoQuestionObjects)
          }
        />
        </section>
        <section className={styles.formSection}>
            <div className={styles.formHeader}>
                <h2 className={styles.formHeaderText}>Please evaluate the impact of each stressor on your well-being and daily life.</h2>
                <p className={styles.formHeaderSubText}>Select 0 if the stressor has no significant impact on your well-being or daily life.</p>
                <p className={styles.formHeaderSubText}>Select 1 if the stressor causes minor stress or concern but is manageable.</p>
                <p className={styles.formHeaderSubText}>Select 2 if the stressor is causing a moderate level of stress, noticeably affecting your well-being and daily life.</p>
                <p className={styles.formHeaderSubText}>Select 3 if the stressor is causing a high level of stress and concern, significantly impacting your well-being and making it difficult to cope.</p>
            </div>
            <QuestionList questions={stressorQuestionObjects} handleChange={(id, newValue) => handleChange(id, newValue, stressorQuestionObjects, setStressorQuestionObjects)}/>
        </section>
        <section className={styles.formSection}>
            <div className={styles.formHeader}>
                <h2 className={styles.formHeaderText}>We would like to find out how you have been feeling in THE PAST WEEK. There are some sentences below. Please select the number which best shows how TRUE each sentence was of you during the past week. There are no right or wrong answers.</h2>
                <p className={styles.formHeaderSubText}>If the statement was NOT TRUE of you (in the past week), select 0.</p>
                <p className={styles.formHeaderSubText}>If the statement was A LITTLE TRUE of you, select 1.</p>
                <p className={styles.formHeaderSubText}>If the statement was FAIRLY TRUE of you, select 2.</p>
                <p className={styles.formHeaderSubText}>If the statement was VERY TRUE of you, select 3.</p>
            </div>
            <QuestionList questions={dassyQuestionObjects} handleChange={(id, newValue) => handleChange(id, newValue, dassyQuestionObjects, setDassyQuestionObjects)}/>
        </section>
        <section className={styles.formSection}>
            <div className={styles.formHeader}>
                <p className={styles.formHeaderText}>Please answer these questions honestly based on your own experiences.</p>
            </div>
        <QuestionList questions={CBIpersonalQuestionObjects} handleChange={(id, newValue) => handleChange(id, newValue, CBIpersonalQuestionObjects, setCBIpersonalQuestionObjects)}/>
        </section>
        <section className={styles.formSection}>
            <div className={styles.formHeader}>
            <p className={styles.formHeaderText}>Answer theses acedemic history questions to the best of your ability.</p>
            </div>
        <QuestionList questions={academicQuestions} handleChange={(id, newValue) => handleChange(id, newValue, academicQuestionObjects, setAcademicQuestionObjects)}/>
        </section>
        <QuestionList questions={passwordQuestionObjects} handleChange={(id, newValue) => handleChange(id, newValue, passwordQuestionObjects, setPasswordQuestionObjects)}/>
        <button className={styles.button} type="submit">Submit</button>
      </form>
    );
  }
    
    render(<ProqolForm />, document.getElementById('app'));