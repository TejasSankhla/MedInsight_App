import React from "react";
import Navbarr from "./components/Navbarr.jsx";
import { Footer } from "./components/Footer";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import { data } from "autoprefixer";
function Layout() {
  const [file, setFile] = useState(null);
  const [brainfile, setbrainFile] = useState(null);
  const [pneumonia, setpneumonia] = useState(null);
  const [Data, setData] = useState({});

  const handlePneumo = async function (e) {
    console.log("running pneu");
    await setpneumonia(e.target.files[0]);
    console.log(pneumonia);

    console.log("Pneumo");
    const formData = await new FormData();
    await formData.append("image", pneumonia);
    try {
      const response = await fetch("http://127.0.0.1:5000/pneumo", {
        method: "POST",
        body: formData,
      });
      if (response.ok) {
        const data1 = await response.json();

        const resultent = data1.Result;
        let finalreport;
        if (resultent >= 0 && resultent <= 25) {
          finalreport =
            "Practice good hygiene by washing hands regularly with soap and water, especially before eating and after coughing or sneezing.Avoid close contact with individuals who are sick, and maintain a healthy distance from anyone exhibiting symptoms of respiratory illness.Stay up to date with vaccinations, including the pneumonia vaccine if recommended by your healthcare provider.";
        } else if (resultent >= 26 && resultent <= 50) {
          finalreport =
            "Be vigilant for symptoms of pneumonia such as persistent cough, fever, difficulty breathing, chest pain, and fatigue.Seek medical attention promptly if you experience symptoms suggestive of pneumonia, especially if you are in a high-risk group such as the elderly or those with chronic health conditions.";
        } else if (resultent >= 51 && resultent <= 75) {
          finalreport =
            "Follow through with medical evaluation and diagnostic tests as recommended by healthcare professionals if pneumonia symptoms persist or worsen.Adhere to prescribed treatment plans, which may include antibiotics, rest, plenty of fluids, and over-the-counter medications for symptom relief.";
        } else {
          finalreport =
            "Seek immediate medical attention if symptoms of pneumonia become severe, such as high fever, rapid breathing, confusion, or bluish skin color.Hospitalization may be necessary for intensive treatment, especially for individuals with compromised immune systems or underlying health conditions.Follow post-treatment care instructions provided by healthcare professionals to support recovery and prevent complications.";
        }
        console.log(finalreport);
        await setData({
          prob: resultent,
          content: finalreport,
        });
        console.log("Response from server:", data);
      } else {
        console.error("Error:", response.status);
      }
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };
  const handleBrain = async (e) => {
    console.log(e);
    setFile(e.target.files[0]);
    setbrainFile(e.target.files[0]);
    if (brainfile != null) {
      const formData = new FormData();
      formData.append("image", brainfile);
      try {
        const response = await fetch("http://127.0.0.1:5000/brain", {
          method: "POST",
          body: formData,
        });
        if (response.ok) {
          const data2 = await response.json();
          setData(data2);
          const resultent = data2.Result;
          let finalreport;
          if (resultent >= 0 && resultent <= 25) {
            finalreport =
              "Maintain a healthy lifestyle with regular exercise and a balanced diet.Stay mentally active by engaging in stimulating activities like reading, puzzles, or learning new skills. Prioritize regular check-ups with your healthcare provider to monitor your overall health";
          } else if (resultent >= 26 && resultent <= 50) {
            finalreport =
              "Increase vigilance for any unusual symptoms such as persistent headaches, changes in vision, seizures, or cognitive difficulties.Keep a journal to track any symptoms and their frequency or severity.Discuss your concerns with a healthcare professional and consider scheduling a brain imaging scan for further evaluation.";
          } else if (resultent >= 51 && resultent <= 75) {
            finalreport =
              "Seek prompt medical attention if you experience any concerning symptoms, without delay.Follow through with recommended diagnostic tests and imaging studies as advised by healthcare professionals.Consider consulting with specialists such as neurologists or neurosurgeons for specialized evaluation and management.";
          } else {
            finalreport =
              "Immediately consult with a neurologist or neurosurgeon for a comprehensive evaluation and treatment plan.Prepare emotionally and practically for potential treatment options, which may include surgery, radiation therapy, or chemotherapy.Engage in a strong support network of family and friends to help navigate through diagnosis, treatment, and recovery processes.";
          }
          console.log("before final report");
          console.log(finalreport);
          setData({
            prob: Math.round(resultent * 100) / 100,
            content: finalreport,
          });
          console.log("Response from server:", data2);
        } else {
          console.error("Error:", response.status);
        }
      } catch (error) {
        console.error("Error uploading image:", error);
      }
    }
  };
  const allHooks = [
    file, //0
    setFile, //1
    brainfile, //2
    setbrainFile, //3
    pneumonia, //4
    setpneumonia, //5
    handleBrain, //6
    handlePneumo, //7
    Data, //8
    setData, //9
  ];
  return (
    <>
      <Navbarr />

      <Outlet context={[allHooks]} />
      <Footer />
    </>
  );
}

export default Layout;
