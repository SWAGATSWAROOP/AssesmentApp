import { useState, useEffect } from 'react'
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'

const GeneralInfo = () => {
  const downloadPDF = () => {
    const capture = document.querySelector('.actual-receipt')
    html2canvas(capture).then((canvas) => {
      const imgData = canvas.toDataURL('img/png')
      const doc = new jsPDF('p', 'mm', 'a4')
      const componentWidth = doc.internal.pageSize.getWidth()
      const componentHeight = doc.internal.pageSize.getHeight()
      doc.addImage(imgData, 'PNG', 0, 0, componentWidth, componentHeight)
      doc.save('receipt.pdf')
    })
  }
  
  const [formData, setFormData] = useState({
    name: '',
    dob: '',
    fathersName: '',
    fathersAge: '',
    fathersMobile: '',
    fathersOccupation: '',
    mothersName: '',
    mothersAge: '',
    mothersMobile: '',
    mothersOccupation: '',
    school: '',
    class: '',
    referredBy: '',
    eyeContact: '',
    socialSmile: '',
    appearance: '',
    chiefComplaints: '',
    history: '',
    prenatal: '',
    otherComplication: '',
    perinatal: '',
    deliveryType: '',
    postnatal: {
      birthWeight: '',
      birthCry: '',
      seizures: '',
      jaundice: '',
      onMedication: '',
      medicationDetails: ''
    },
    medicalHistory: '',
    developmentHistory: {
      motorMilestonesDelay: '',
      speechDelay: ''
    },
    previousTreatment: '',
    currentTreatment: '',
    familyHistory: {
      speechDelay: '',
      familyMembers: '',
      parentsAgeAtMarriage: '',
      typeOfMarriage: '',
      motherTongue: '',
      numberOfSiblings: '',
      problemInFamily1: '',
      problemInFamily2: ''
    },
    schoolHistory: {
      ageWhenJoinedSchool: '',
      schoolName: '',
      interactionInClass: '',
      concentrationAndAttention: '',
      sittingTolerance: '',
      behaviorInSchool: '',
      academicPerformance: '',
      relationshipWithTeacher: '',
      playAndSocialSkills: '',
      teachersFeedback: ''
    },
    academicPerformance: {
      writing: {
        handDominance: '',
        boardCopying: '',
        speedOfWriting: '',
        pressure: '',
        handwriting: '',
        spelling: '',
        selfCorrection: '',
        completionOfWork: ''
      },
      reading: {
        confusionBetweenLetters: '',
        reversesLetters: '',
        fluencyOfReading: '',
        comprehension: '',
        substitutesOrLeavesWords: '',
        readsSlowly: '',
        poorRetention: '',
        readsReluctantly: ''
      },
      playAndSocialSkills: {
        interactionAndAdjustment: '',
        followingRules: '',
        extracurricularActivities: '',
        turnTaking: ''
      },
      behavioralIssues: {
        adamantOrStubborn: '',
        tantrums: '',
        selfStimulatoryBehavior: '',
        selfInjuriousBehaviors: '',
        injuringOthers: '',
        irritation: '',
        aggression: '',
        hyperactivityOrImpulsivity: '',
        distraction: ''
      },
      languageAndCommunication: {
        verbal: '',
        comprehensionSkills: '',
        stammering: '',
        pronunciationErrors: '',
        wordConfusion: ''
      },
      socialAndEmotional: {
        socialization: '',
        selfEsteem: '',
        selfConfidence: ''
      },
      adl: {
        eating: {
          independence: '',
          chewFood: '',
          typeOfFood: '',
          smashFood: '',
          choosyInEating: '',
          spillsFood: '',
          slowEaterOrPicker: '',
          cooperatesOrNotCooperates: ''
        },
        grooming: '',
        dressing: {
          independence: '',
          cooperatesOrNotCooperates: '',
          identifiesInOut: '',
          upperDressing: '',
          lowerDressing: '',
          buttoning: '',
          lacing: ''
        },
        toileting: '',
        bedWetting: ''
      },
      sleepingDisturbance: '',
      timeMoneyManagement: '',
      grossAndFineMotorSkills: '',
      sensoryProfile: {
        visual: '',
        auditory: '',
        proprioception: '',
        gustatoryAndOlfactory: '',
        tactile: '',
        vestibular: ''
      },
      impressionAndRecommendation: ''
    }
  })

  const [age, setAge] = useState(null)
  const [currDate, setCurrDate] = useState('')

  useEffect(() => {
    const currentDate = new Date()
    const options = { timeZone: 'Asia/Kolkata' }
    setCurrDate(currentDate.toLocaleDateString('en-IN', options))
  }, [currDate])

  const findAge = (value) => {
    const selectedDate = new Date(value)
    const options = { timeZone: 'Asia/Kolkata' }
    const currentDate = new Date().toLocaleDateString('en-IN', options)
    const currentDateObject = new Date(currentDate)

    let age = currentDateObject.getFullYear() - selectedDate.getFullYear()

    // Check if the birthday hasn't occurred yet this year
    if (
      currentDateObject.getMonth() - 1 < selectedDate.getMonth() ||
      (currentDateObject.getMonth() - 1 === selectedDate.getMonth() &&
        currentDateObject.getDate() + 1 < selectedDate.getDate())
    ) {
      age--
    }
    setAge(age)
  }

  const handleChange = (field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value
    }))
  }

  const generatePDF = () => {}

  const submit = () => {}

  return (
    <>
      <form className="flex flex-col space-y-4 pt-5 pb-20">
        <div className="flex flex-row space-x-60">
          <label>
            Name -
            <input
              className="outline-none"
              placeholder="Enter Name"
              value={formData.name}
              onChange={(e) => handleChange('name', e.target.value)}
            />
          </label>
          <label>Date -{currDate}</label>
        </div>
        <div className="flex flex-row space-x-60">
          <label>
            DOB -
            <input
              className="outline-none"
              type="date"
              onChange={(e) => {
                findAge(e.target.value)
                handleChange('dob', e.target.value)
              }}
            />
          </label>
          <div>Age - {age}</div>
        </div>
        <label>
          Fathers Name -
          <input
            className="outline-none"
            value={formData.fathersName}
            onChange={(e) => handleChange('fathersName', e.target.value)}
          />
        </label>
        <div className="flex justify-between">
          <label>
            Age -
            <input
              className="outline-none"
              value={formData.fathersAge}
              onChange={(e) => handleChange('fathersAge', e.target.value)}
            />
          </label>
          <label>
            Mobile no -
            <input
              className="outline-none"
              value={formData.fathersMobile}
              onChange={(e) => handleChange('fathersMobile', e.target.value)}
            />
          </label>
        </div>
        <label>
          Occupation -
          <input
            className="outline-none"
            value={formData.fathersOccupation}
            onChange={(e) => handleChange('fathersOccupation', e.target.value)}
          />
        </label>
        <label>
          Mothers Name -
          <input
            className="outline-none"
            value={formData.mothersName}
            onChange={(e) => handleChange('mothersName', e.target.value)}
          />
        </label>
        <div className="flex justify-between">
          <label>
            Age -
            <input
              className="outline-none"
              value={formData.mothersAge}
              onChange={(e) => handleChange('mothersAge', e.target.value)}
            />
          </label>
          <label>
            Mobile no -
            <input
              className="outline-none"
              value={formData.mothersMobile}
              onChange={(e) => handleChange('mothersMobile', e.target.value)}
            />
          </label>
        </div>
        <label>
          Occupation -
          <input
            className="outline-none"
            value={formData.mothersOccupation}
            onChange={(e) => handleChange('mothersOccupation', e.target.value)}
          />
        </label>
        <div className="flex justify-between">
          <label>
            School -
            <input
              className="outline-none"
              value={formData.school}
              onChange={(e) => handleChange('school', e.target.value)}
            />
          </label>
          <label>
            Class -
            <input
              className="outline-none"
              value={formData.class}
              onChange={(e) => handleChange('class', e.target.value)}
            />
          </label>
        </div>
        <label>
          Referred By -
          <input
            className="outline-none"
            value={formData.referredBy}
            onChange={(e) => handleChange('referredBy', e.target.value)}
          />
        </label>
        <h1 className="font-bold">GENERAL OBSERVATION :</h1>
        <div className="ml-8 space-y-4 flex flex-col">
          <label>
            Eye-Contact -
            <input
              className="outline-none"
              value={formData.eyeContact}
              onChange={(e) => handleChange('eyeContact', e.target.value)}
            />
          </label>
          <label>
            Social smile -
            <input
              className="outline-none"
              value={formData.socialSmile}
              onChange={(e) => handleChange('socialSmile', e.target.value)}
            />
          </label>
          <label>
            Appearance -
            <input
              className="outline-none"
              value={formData.appearance}
              onChange={(e) => handleChange('appearance', e.target.value)}
            />
          </label>
        </div>
        <h1 className="font-bold">CHIEF COMPLAINTS :</h1>
        <textarea
          className="resize-none h-40 outline-none border-black border-2 p-2"
          value={formData.chiefComplaints}
          onChange={(e) => handleChange('chiefComplaints', e.target.value)}
        />
        <h1 className="font-bold">HISTORY :</h1>
        <h1 className="font-bold">BIRTH HISTORY :</h1>
        <div className="ml-8">
          <span className="font-semibold">Prenatal -</span>
          <select
            value={formData.prenatal}
            onChange={(e) => handleChange('prenatal', e.target.value)}
          >
            <option>Select</option>
            <option value="option1">Bleeding</option>
            <option value="option2">Infection</option>
            <option value="option3">Injury</option>
          </select>
        </div>
        <label className="font-semibold">Any Other Complication</label>
        <textarea
          className="resize-none h-40 outline-none border-black border-2 p-2"
          value={formData.otherComplication}
          onChange={(e) => handleChange('otherComplication', e.target.value)}
        />
        <label>
          <span className="font-semibold">Perinatal -</span>
          <input
            className="outline-none"
            value={formData.perinatal}
            onChange={(e) => handleChange('perinatal', e.target.value)}
          />
        </label>
        <div className="ml-8">
          <label>
            Type of delivery -
            <input
              className="outline-none"
              value={formData.deliveryType}
              onChange={(e) => handleChange('deliveryType', e.target.value)}
            />
          </label>
        </div>
        <span className="font-semibold">Postnatal - </span>
        <div className="ml-8 space-y-4">
          <div>
            <span>Birth weight - </span>
            <input
              className="outline-none"
              value={formData.postnatal.birthWeight}
              onChange={(e) =>
                handleChange('postnatal', {
                  ...formData.postnatal,
                  birthWeight: e.target.value
                })
              }
            />
          </div>
          <div>
            <span>Birth Cry - </span>
            <select
              value={formData.postnatal.birthCry}
              onChange={(e) =>
                handleChange('postnatal', {
                  ...formData.postnatal,
                  birthCry: e.target.value
                })
              }
            >
              <option>Select Option</option>
              <option value="Present">Present</option>
              <option value="Absent">Absent</option>
            </select>
          </div>
          <div>
            <span>Seizures - </span>
            <select
              value={formData.postnatal.seizures}
              onChange={(e) =>
                handleChange('postnatal', {
                  ...formData.postnatal,
                  seizures: e.target.value
                })
              }
            >
              <option>Select Option</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
          <div>
            <span>Jaundice - </span>
            <select
              value={formData.postnatal.jaundice}
              onChange={(e) =>
                handleChange('postnatal', {
                  ...formData.postnatal,
                  jaundice: e.target.value
                })
              }
            >
              <option>Select Option</option>
              <option value="Present">Present</option>
              <option value="Absent">Absent</option>
            </select>
          </div>
          <div>
            <span>On medication - </span>
            <select className="mr-10">
              <option>Select Option</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
            <span>if so - </span>
            <input
              className="outline-none"
              value={formData.postnatal.medicationDetails}
              onChange={(e) =>
                handleChange('postnatal', {
                  ...formData.postnatal,
                  medicationDetails: e.target.value
                })
              }
            />
          </div>
        </div>

        <h1 className="font-bold">MEDICAL HISTORY :</h1>
        <textarea
          className="resize-none h-40 outline-none border-black border-2 p-2 overflow-scroll"
          value={formData.medicalHistory}
          onChange={(e) => handleChange('medicalHistory', e.target.value)}
        />

        <h1 className="font-bold">DEVELOPMENT HISTORY :</h1>
        <div className="ml-8 space-y-4 flex flex-col">
          <div>
            <span>Motor milestones delay – </span>
            <select
              value={formData.developmentHistory.motorMilestonesDelay}
              onChange={(e) =>
                handleChange('developmentHistory', {
                  ...formData.developmentHistory,
                  motorMilestonesDelay: e.target.value
                })
              }
            >
              <option>Select Option</option>
              <option value="Present">Present</option>
              <option value="Absent">Absent</option>
            </select>
          </div>
          <div>
            <span>Speech delay – </span>
            <select
              value={formData.developmentHistory.speechDelay}
              onChange={(e) =>
                handleChange('developmentHistory', {
                  ...formData.developmentHistory,
                  speechDelay: e.target.value
                })
              }
            >
              <option>Select Option</option>
              <option value="Present">Present</option>
              <option value="Absent">Absent</option>
            </select>
          </div>
        </div>
        <label className="font-semibold">Previous treatment/ Therapy-</label>
        <textarea
          className="resize-none h-40 outline-none border-black border-2 p-2"
          value={formData.previousTreatment}
          onChange={(e) => handleChange('previousTreatment', e.target.value)}
        />
        <label className="font-semibold">Current treatment/Therapy-</label>
        <textarea
          className="resize-none h-40 outline-none border-black border-2 p-2"
          value={formData.currentTreatment}
          onChange={(e) => handleChange('currentTreatment', e.target.value)}
        />
        <h1 className="font-bold">FAMILY HISTORY :</h1>
        <div className="ml-8 space-y-4 flex flex-col">
          <div>
            <span>Speech delay – </span>
            <select>
              <option>Select Option</option>
              <option value="Joint">Joint</option>
              <option value="Nuclear">Nuclear</option>
            </select>
          </div>
          <label>
            Family members -
            <input
              className="outline-none"
              value={formData.familyHistory.familyMembers}
              onChange={(e) =>
                handleChange('familyHistory', {
                  ...formData.familyHistory,
                  familyMembers: e.target.value
                })
              }
            />
          </label>
          <label>
            Parent’s age at the time of marriage-
            <input
              className="outline-none"
              value={formData.familyHistory.parentsAgeAtMarriage}
              onChange={(e) =>
                handleChange('familyHistory', {
                  ...formData.familyHistory,
                  parentsAgeAtMarriage: e.target.value
                })
              }
            />
          </label>
          <label>
            Type of marriage-
            <input
              className="outline-none"
              value={formData.familyHistory.typeOfMarriage}
              onChange={(e) =>
                handleChange('familyHistory', {
                  ...formData.familyHistory,
                  typeOfMarriage: e.target.value
                })
              }
            />
          </label>
          <label>
            Mother tongue-
            <input
              className="outline-none"
              value={formData.familyHistory.motherTongue}
              onChange={(e) =>
                handleChange('familyHistory', {
                  ...formData.familyHistory,
                  motherTongue: e.target.value
                })
              }
            />
          </label>
          <label>
            No. of siblings-
            <input
              className="outline-none"
              value={formData.familyHistory.numberOfSiblings}
              onChange={(e) =>
                handleChange('familyHistory', {
                  ...formData.familyHistory,
                  numberOfSiblings: e.target.value
                })
              }
            />
          </label>
          <label>History of same type problem in family-</label>
          <textarea
            className="resize-none h-20 outline-none border-black border-2 p-2"
            value={formData.familyHistory.problemInFamily1}
            onChange={(e) =>
              handleChange('familyHistory', {
                ...formData.familyHistory,
                problemInFamily1: e.target.value
              })
            }
          />
          <label>History of same type problem in family-</label>
          <textarea
            className="resize-none h-20 outline-none border-black border-2 p-2"
            value={formData.familyHistory.problemInFamily2}
            onChange={(e) =>
              handleChange('familyHistory', {
                ...formData.familyHistory,
                problemInFamily2: e.target.value
              })
            }
          />
        </div>

        <h1 className="font-bold">SCHOOL HISTORY :</h1>
        <div className="ml-8 space-y-4 flex flex-col">
          <label>
            Age when the child joined school-
            <input
              className="outline-none"
              value={formData.schoolHistory.ageWhenJoinedSchool}
              onChange={(e) =>
                handleChange('schoolHistory', {
                  ...formData.schoolHistory,
                  ageWhenJoinedSchool: e.target.value
                })
              }
            />
          </label>
          <label>
            School name-
            <input
              className="outline-none"
              value={formData.schoolHistory.schoolName}
              onChange={(e) =>
                handleChange('schoolHistory', {
                  ...formData.schoolHistory,
                  schoolName: e.target.value
                })
              }
            />
          </label>
          <label>
            Interaction in class-
            <input
              className="outline-none"
              value={formData.schoolHistory.interactionInClass}
              onChange={(e) =>
                handleChange('schoolHistory', {
                  ...formData.schoolHistory,
                  interactionInClass: e.target.value
                })
              }
            />
          </label>
          <label>
            Concentration and attention-
            <input
              className="outline-none"
              value={formData.schoolHistory.concentrationAndAttention}
              onChange={(e) =>
                handleChange('schoolHistory', {
                  ...formData.schoolHistory,
                  concentrationAndAttention: e.target.value
                })
              }
            />
          </label>
          <label>
            Sitting tolerance-
            <input
              className="outline-none"
              value={formData.schoolHistory.sittingTolerance}
              onChange={(e) =>
                handleChange('schoolHistory', {
                  ...formData.schoolHistory,
                  sittingTolerance: e.target.value
                })
              }
            />
          </label>
          <label>
            Behaviour in school-
            <input
              className="outline-none"
              value={formData.schoolHistory.behaviorInSchool}
              onChange={(e) =>
                handleChange('schoolHistory', {
                  ...formData.schoolHistory,
                  behaviorInSchool: e.target.value
                })
              }
            />
          </label>
          <label>
            Academic performance-
            <input
              className="outline-none"
              value={formData.schoolHistory.academicPerformance}
              onChange={(e) =>
                handleChange('schoolHistory', {
                  ...formData.schoolHistory,
                  academicPerformance: e.target.value
                })
              }
            />
          </label>
          <label>
            Relationship between the child and teacher-
            <input
              className="outline-none"
              value={formData.schoolHistory.relationshipWithTeacher}
              onChange={(e) =>
                handleChange('schoolHistory', {
                  ...formData.schoolHistory,
                  relationshipWithTeacher: e.target.value
                })
              }
            />
          </label>
          <label>
            Play and social skills-
            <input
              className="outline-none"
              value={formData.schoolHistory.playAndSocialSkills}
              onChange={(e) =>
                handleChange('schoolHistory', {
                  ...formData.schoolHistory,
                  playAndSocialSkills: e.target.value
                })
              }
            />
          </label>
          <label>
            Teacher’s feedback-
            <input
              className="outline-none"
              value={formData.schoolHistory.teachersFeedback}
              onChange={(e) =>
                handleChange('schoolHistory', {
                  ...formData.schoolHistory,
                  teachersFeedback: e.target.value
                })
              }
            />
          </label>
        </div>

        <h1 className="font-bold">ACADEMICAL PERFORMANCE :</h1>
        <h1 className="font-bold">WRITING :</h1>
        <div className="ml-8 space-y-4 flex flex-col">
          <label>
            Hand dominance-
            <input
              className="outline-none"
              value={formData.academicPerformance.writing.handDominance}
              onChange={(e) =>
                handleChange('academicPerformance', {
                  ...formData.academicPerformance,
                  writing: {
                    ...formData.academicPerformance.writing,
                    handDominance: e.target.value
                  }
                })
              }
            />
          </label>
          <label>
            Board copying-
            <input
              className="outline-none"
              value={formData.academicPerformance.writing.boardCopying}
              onChange={(e) =>
                handleChange('academicPerformance', {
                  ...formData.academicPerformance,
                  writing: {
                    ...formData.academicPerformance.writing,
                    boardCopying: e.target.value
                  }
                })
              }
            />
          </label>
          <label>
            Speed of writing-
            <input
              className="outline-none"
              value={formData.academicPerformance.writing.speedOfWriting}
              onChange={(e) =>
                handleChange('academicPerformance', {
                  ...formData.academicPerformance,
                  writing: {
                    ...formData.academicPerformance.writing,
                    speedOfWriting: e.target.value
                  }
                })
              }
            />
          </label>
          <label>
            Pressure-
            <input
              className="outline-none"
              value={formData.academicPerformance.writing.pressure}
              onChange={(e) =>
                handleChange('academicPerformance', {
                  ...formData.academicPerformance,
                  writing: {
                    ...formData.academicPerformance.writing,
                    pressure: e.target.value
                  }
                })
              }
            />
          </label>
          <label>
            Handwriting-
            <input
              className="outline-none"
              value={formData.academicPerformance.writing.handwriting}
              onChange={(e) =>
                handleChange('academicPerformance', {
                  ...formData.academicPerformance,
                  writing: {
                    ...formData.academicPerformance.writing,
                    handwriting: e.target.value
                  }
                })
              }
            />
          </label>
          <label>
            Spelling-
            <input
              className="outline-none"
              value={formData.academicPerformance.writing.spelling}
              onChange={(e) =>
                handleChange('academicPerformance', {
                  ...formData.academicPerformance,
                  writing: {
                    ...formData.academicPerformance.writing,
                    spelling: e.target.value
                  }
                })
              }
            />
          </label>
          <label>
            Self-correction-
            <input
              className="outline-none"
              value={formData.academicPerformance.writing.selfCorrection}
              onChange={(e) =>
                handleChange('academicPerformance', {
                  ...formData.academicPerformance,
                  writing: {
                    ...formData.academicPerformance.writing,
                    selfCorrection: e.target.value
                  }
                })
              }
            />
          </label>
          <label>
            Completion of work-
            <input
              className="outline-none"
              value={formData.academicPerformance.writing.completionOfWork}
              onChange={(e) =>
                handleChange('academicPerformance', {
                  ...formData.academicPerformance,
                  writing: {
                    ...formData.academicPerformance.writing,
                    completionOfWork: e.target.value
                  }
                })
              }
            />
          </label>
        </div>

        <h1 className="font-bold">READING :</h1>
        <div className="ml-8 space-y-4 flex flex-col">
          <label>
            Confusion between similar letters-
            <input
              className="outline-none"
              value={formData.academicPerformance.reading.confusionBetweenLetters}
              onChange={(e) =>
                handleChange('academicPerformance', {
                  ...formData.academicPerformance,
                  reading: {
                    ...formData.academicPerformance.reading,
                    confusionBetweenLetters: e.target.value
                  }
                })
              }
            />
          </label>
          <label>
            Reverses letters-
            <input
              className="outline-none"
              value={formData.academicPerformance.reading.reversesLetters}
              onChange={(e) =>
                handleChange('academicPerformance', {
                  ...formData.academicPerformance,
                  reading: {
                    ...formData.academicPerformance.reading,
                    reversesLetters: e.target.value
                  }
                })
              }
            />
          </label>
          <label>
            Fluency of reading-
            <input
              className="outline-none"
              value={formData.academicPerformance.reading.fluencyOfReading}
              onChange={(e) =>
                handleChange('academicPerformance', {
                  ...formData.academicPerformance,
                  reading: {
                    ...formData.academicPerformance.reading,
                    fluencyOfReading: e.target.value
                  }
                })
              }
            />
          </label>
          <label>
            Comprehension of ideas and themes-
            <input
              className="outline-none"
              value={formData.academicPerformance.reading.comprehensionOfIdeas}
              onChange={(e) =>
                handleChange('academicPerformance', {
                  ...formData.academicPerformance,
                  reading: {
                    ...formData.academicPerformance.reading,
                    comprehensionOfIdeas: e.target.value
                  }
                })
              }
            />
          </label>
          <label>
            Substitutes or leave words while reading-
            <input
              className="outline-none"
              value={formData.academicPerformance.reading.substitutesOrLeavesWords}
              onChange={(e) =>
                handleChange('academicPerformance', {
                  ...formData.academicPerformance,
                  reading: {
                    ...formData.academicPerformance.reading,
                    substitutesOrLeavesWords: e.target.value
                  }
                })
              }
            />
          </label>
          <label>
            Reads slowly-
            <input
              className="outline-none"
              value={formData.academicPerformance.reading.readsSlowly}
              onChange={(e) =>
                handleChange('academicPerformance', {
                  ...formData.academicPerformance,
                  reading: {
                    ...formData.academicPerformance.reading,
                    readsSlowly: e.target.value
                  }
                })
              }
            />
          </label>
          <label>
            Poor retention of new vocabulary-
            <input
              className="outline-none"
              value={formData.academicPerformance.reading.poorRetention}
              onChange={(e) =>
                handleChange('academicPerformance', {
                  ...formData.academicPerformance,
                  reading: {
                    ...formData.academicPerformance.reading,
                    poorRetention: e.target.value
                  }
                })
              }
            />
          </label>
          <label>
            Reads reluctantly-
            <input
              className="outline-none"
              value={formData.academicPerformance.reading.readsReluctantly}
              onChange={(e) =>
                handleChange('academicPerformance', {
                  ...formData.academicPerformance,
                  reading: {
                    ...formData.academicPerformance.reading,
                    readsReluctantly: e.target.value
                  }
                })
              }
            />
          </label>
        </div>

        <h1 className="font-bold">PLAY/SOCIAL SKILLS :</h1>
        <div className="ml-8 space-y-4 flex flex-col">
          <label>
            Interaction & adjustment with peers, siblings, parents & teachers-
            <input
              className="outline-none"
              value={formData.academicPerformance.playAndSocialSkills.interactionAndAdjustment}
              onChange={(e) =>
                handleChange('academicPerformance', {
                  ...formData.academicPerformance,
                  playAndSocialSkills: {
                    ...formData.academicPerformance.playAndSocialSkills,
                    interactionAndAdjustment: e.target.value
                  }
                })
              }
            />
          </label>
          <label>
            Following rules/regulation-
            <input
              className="outline-none"
              value={formData.academicPerformance.playAndSocialSkills.followingRules}
              onChange={(e) =>
                handleChange('academicPerformance', {
                  ...formData.academicPerformance,
                  playAndSocialSkills: {
                    ...formData.academicPerformance.playAndSocialSkills,
                    followingRules: e.target.value
                  }
                })
              }
            />
          </label>
          <label>
            Extra – curricular activities-
            <input
              className="outline-none"
              value={formData.academicPerformance.playAndSocialSkills.extraCurricularActivities}
              onChange={(e) =>
                handleChange('academicPerformance', {
                  ...formData.academicPerformance,
                  playAndSocialSkills: {
                    ...formData.academicPerformance.playAndSocialSkills,
                    extraCurricularActivities: e.target.value
                  }
                })
              }
            />
          </label>
          <label>
            Turn taking-
            <input
              className="outline-none"
              value={formData.academicPerformance.playAndSocialSkills.turnTaking}
              onChange={(e) =>
                handleChange('academicPerformance', {
                  ...formData.academicPerformance,
                  playAndSocialSkills: {
                    ...formData.academicPerformance.playAndSocialSkills,
                    turnTaking: e.target.value
                  }
                })
              }
            />
          </label>
        </div>

        <h1 className="font-bold">BEHAVIORAL ISSUES :</h1>
        <div className="ml-8 space-y-4 flex flex-col">
          <label>
            Adamant/stubborn-
            <input
              className="outline-none"
              value={formData.academicPerformance.behavioralIssues.adamantOrStubborn}
              onChange={(e) =>
                handleChange('academicPerformance', {
                  ...formData.academicPerformance,
                  behavioralIssues: {
                    ...formData.academicPerformance.behavioralIssues,
                    adamantOrStubborn: e.target.value
                  }
                })
              }
            />
          </label>
          <label>
            Tantrums-
            <input
              className="outline-none"
              value={formData.academicPerformance.behavioralIssues.tantrums}
              onChange={(e) =>
                handleChange('academicPerformance', {
                  ...formData.academicPerformance,
                  behavioralIssues: {
                    ...formData.academicPerformance.behavioralIssues,
                    tantrums: e.target.value
                  }
                })
              }
            />
          </label>
          <label>
            Self-stimulatory behaviour-
            <input
              className="outline-none"
              value={formData.academicPerformance.behavioralIssues.selfStimulatoryBehavior}
              onChange={(e) =>
                handleChange('academicPerformance', {
                  ...formData.academicPerformance,
                  behavioralIssues: {
                    ...formData.academicPerformance.behavioralIssues,
                    selfStimulatoryBehavior: e.target.value
                  }
                })
              }
            />
          </label>
          <label>
            Self-injurious behaviours-
            <input
              className="outline-none"
              value={formData.academicPerformance.behavioralIssues.selfInjuriousBehaviors}
              onChange={(e) =>
                handleChange('academicPerformance', {
                  ...formData.academicPerformance,
                  behavioralIssues: {
                    ...formData.academicPerformance.behavioralIssues,
                    selfInjuriousBehaviors: e.target.value
                  }
                })
              }
            />
          </label>
          <label>
            Injuring others-
            <input
              className="outline-none"
              value={formData.academicPerformance.behavioralIssues.injuringOthers}
              onChange={(e) =>
                handleChange('academicPerformance', {
                  ...formData.academicPerformance,
                  behavioralIssues: {
                    ...formData.academicPerformance.behavioralIssues,
                    injuringOthers: e.target.value
                  }
                })
              }
            />
          </label>
          <label>
            Irritation-
            <input
              className="outline-none"
              value={formData.academicPerformance.behavioralIssues.irritation}
              onChange={(e) =>
                handleChange('academicPerformance', {
                  ...formData.academicPerformance,
                  behavioralIssues: {
                    ...formData.academicPerformance.behavioralIssues,
                    irritation: e.target.value
                  }
                })
              }
            />
          </label>
          <label>
            Aggression-
            <input
              className="outline-none"
              value={formData.academicPerformance.behavioralIssues.aggression}
              onChange={(e) =>
                handleChange('academicPerformance', {
                  ...formData.academicPerformance,
                  behavioralIssues: {
                    ...formData.academicPerformance.behavioralIssues,
                    aggression: e.target.value
                  }
                })
              }
            />
          </label>
          <label>
            Hyperactivity/Impulsivity-
            <input
              className="outline-none"
              value={formData.academicPerformance.behavioralIssues.hyperactivityOrImpulsivity}
              onChange={(e) =>
                handleChange('academicPerformance', {
                  ...formData.academicPerformance,
                  behavioralIssues: {
                    ...formData.academicPerformance.behavioralIssues,
                    hyperactivityOrImpulsivity: e.target.value
                  }
                })
              }
            />
          </label>
          <label>
            Distraction-
            <input
              className="outline-none"
              value={formData.academicPerformance.behavioralIssues.distraction}
              onChange={(e) =>
                handleChange('academicPerformance', {
                  ...formData.academicPerformance,
                  behavioralIssues: {
                    ...formData.academicPerformance.behavioralIssues,
                    distraction: e.target.value
                  }
                })
              }
            />
          </label>
        </div>

        <h1 className="font-bold">LANGUAGE AND COMMUNICATION :</h1>
        <div className="ml-8 space-y-4 flex flex-col">
          <label>
            Verbal-
            <input
              className="outline-none"
              value={formData.academicPerformance.languageAndCommunication.verbal}
              onChange={(e) =>
                handleChange('academicPerformance', {
                  ...formData.academicPerformance,
                  languageAndCommunication: {
                    ...formData.academicPerformance.languageAndCommunication,
                    verbal: e.target.value
                  }
                })
              }
            />
          </label>
          <label>
            Comprehension skills-
            <input
              className="outline-none"
              value={formData.academicPerformance.languageAndCommunication.comprehensionSkills}
              onChange={(e) =>
                handleChange('academicPerformance', {
                  ...formData.academicPerformance,
                  languageAndCommunication: {
                    ...formData.academicPerformance.languageAndCommunication,
                    comprehensionSkills: e.target.value
                  }
                })
              }
            />
          </label>
          <label>
            Stammering-
            <input
              className="outline-none"
              value={formData.academicPerformance.languageAndCommunication.stammering}
              onChange={(e) =>
                handleChange('academicPerformance', {
                  ...formData.academicPerformance,
                  languageAndCommunication: {
                    ...formData.academicPerformance.languageAndCommunication,
                    stammering: e.target.value
                  }
                })
              }
            />
          </label>
          <label>
            Pronunciation errors-
            <input
              className="outline-none"
              value={formData.academicPerformance.languageAndCommunication.pronunciationErrors}
              onChange={(e) =>
                handleChange('academicPerformance', {
                  ...formData.academicPerformance,
                  languageAndCommunication: {
                    ...formData.academicPerformance.languageAndCommunication,
                    pronunciationErrors: e.target.value
                  }
                })
              }
            />
          </label>
          <label>
            Word confusion-
            <input
              className="outline-none"
              value={formData.academicPerformance.languageAndCommunication.wordConfusion}
              onChange={(e) =>
                handleChange('academicPerformance', {
                  ...formData.academicPerformance,
                  languageAndCommunication: {
                    ...formData.academicPerformance.languageAndCommunication,
                    wordConfusion: e.target.value
                  }
                })
              }
            />
          </label>
        </div>

        <h1 className="font-bold">SOCIAL & EMOTIONAL :</h1>
        <div className="ml-8 space-y-4 flex flex-col">
          <label>
            Socialization-
            <input
              className="outline-none"
              value={formData.academicPerformance.socialAndEmotional.socialization}
              onChange={(e) =>
                handleChange('academicPerformance', {
                  ...formData.academicPerformance,
                  socialAndEmotional: {
                    ...formData.academicPerformance.socialAndEmotional,
                    socialization: e.target.value
                  }
                })
              }
            />
          </label>
          <label>
            Self – esteem-
            <input
              className="outline-none"
              value={formData.academicPerformance.socialAndEmotional.selfEsteem}
              onChange={(e) =>
                handleChange('academicPerformance', {
                  ...formData.academicPerformance,
                  socialAndEmotional: {
                    ...formData.academicPerformance.socialAndEmotional,
                    selfEsteem: e.target.value
                  }
                })
              }
            />
          </label>
          <label>
            Self-confidence-
            <input
              className="outline-none"
              value={formData.academicPerformance.socialAndEmotional.selfConfidence}
              onChange={(e) =>
                handleChange('academicPerformance', {
                  ...formData.academicPerformance,
                  socialAndEmotional: {
                    ...formData.academicPerformance.socialAndEmotional,
                    selfConfidence: e.target.value
                  }
                })
              }
            />
          </label>
        </div>

        <h1 className="font-bold">ADL :</h1>
        <div className="ml-8 space-y-4">
          <div>
            <h1 className="inline font-semibold">Eating - </h1>
            <select
              onChange={(e) =>
                handleChange('adl', {
                  ...formData.adl,
                  eating: {
                    ...formData.adl.eating,
                    independence: e.target.value
                  }
                })
              }
            >
              <option>Select Option</option>
              <option value="Independent">Independent</option>
              <option value="dependent">dependent</option>
            </select>
          </div>
          <div className="flex flex-col ml-16 space-y-4">
            <label>
              Chew food –
              <select
                onChange={(e) =>
                  handleChange('adl', {
                    ...formData.adl,
                    eating: {
                      ...formData.adl.eating,
                      chewFood: e.target.value
                    }
                  })
                }
              >
                <option>Select Option</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </label>
            <label>
              Type Of Food -
              <input
                onChange={(e) =>
                  handleChange('adl', {
                    ...formData.adl,
                    eating: {
                      ...formData.adl.eating,
                      typeOfFood: e.target.value
                    }
                  })
                }
                className="outline-none"
              />
            </label>
            <label>
              Smash food –
              <select
                onChange={(e) =>
                  handleChange('adl', {
                    ...formData.adl,
                    eating: {
                      ...formData.adl.eating,
                      smashFood: e.target.value
                    }
                  })
                }
              >
                <option>Select Option</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </label>
            <label>
              Choosy in eating –
              <select
                onChange={(e) =>
                  handleChange('adl', {
                    ...formData.adl,
                    eating: {
                      ...formData.adl.eating,
                      choosyInEating: e.target.value
                    }
                  })
                }
              >
                <option>Select Option</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </label>
            <label>
              Spills food –
              <select
                onChange={(e) =>
                  handleChange('adl', {
                    ...formData.adl,
                    eating: {
                      ...formData.adl.eating,
                      spillsFood: e.target.value
                    }
                  })
                }
              >
                <option>Select Option</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </label>
            <label>
              Slow eater / pick -
              <select
                onChange={(e) =>
                  handleChange('adl', {
                    ...formData.adl,
                    eating: {
                      ...formData.adl.eating,
                      slowEaterOrPicker: e.target.value
                    }
                  })
                }
              >
                <option>Select Option</option>
                <option value="Slow eater">Slow eater</option>
                <option value="pick">pick</option>
              </select>
            </label>
            <label>
              Co-operates / not co-operates -
              <select
                onChange={(e) =>
                  handleChange('adl', {
                    ...formData.adl,
                    eating: {
                      ...formData.adl.eating,
                      cooperatesOrNotCooperates: e.target.value
                    }
                  })
                }
              >
                <option>Select Option</option>
                <option value="Co-operates">Co-operates</option>
                <option value="not co-operates">not co-operates</option>
              </select>
            </label>
          </div>
          <div>
            <h1 className="inline font-semibold"> Grooming - </h1>
            <select
              onChange={(e) =>
                handleChange('adl', {
                  ...formData.adl,
                  grooming: e.target.value
                })
              }
            >
              <option>Select Option</option>
              <option value="Independent">Independent</option>
              <option value="dependent">dependent</option>
            </select>
          </div>
          <div className="space-y-4">
            <div>
              <h1 className="inline font-semibold"> Dressing - </h1>
              <select
                onChange={(e) =>
                  handleChange('adl', {
                    ...formData.adl,
                    dressing: {
                      ...formData.adl.dressing,
                      independence: e.target.value
                    }
                  })
                }
              >
                <option>Select Option</option>
                <option value="Independent">Independent</option>
                <option value="dependent">dependent</option>
              </select>
            </div>
            <div className="flex flex-col ml-16 space-y-4">
              <label>
                Co-operates / not co-operates -
                <select
                  onChange={(e) =>
                    handleChange('adl', {
                      ...formData.adl,
                      dressing: {
                        ...formData.adl.dressing,
                        cooperatesOrNotCooperates: e.target.value
                      }
                    })
                  }
                >
                  <option>Select Option</option>
                  <option value="Co-operates">Co-operates</option>
                  <option value="not co-operates">not co-operates</option>
                </select>
              </label>
              <label>
                Identifies in & out -
                <select
                  onChange={(e) =>
                    handleChange('adl', {
                      ...formData.adl,
                      dressing: {
                        ...formData.adl.dressing,
                        identifiesInOut: e.target.value
                      }
                    })
                  }
                >
                  <option>Select Option</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </label>
              <label>
                Upper dressing -
                <select
                  onChange={(e) =>
                    handleChange('adl', {
                      ...formData.adl,
                      dressing: {
                        ...formData.adl.dressing,
                        upperDressing: e.target.value
                      }
                    })
                  }
                >
                  <option>Select Option</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </label>
              <label>
                Lower dressing -
                <select
                  onChange={(e) =>
                    handleChange('adl', {
                      ...formData.adl,
                      dressing: {
                        ...formData.adl.dressing,
                        lowerDressing: e.target.value
                      }
                    })
                  }
                >
                  <option>Select Option</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </label>
              <label>
                Buttoning -
                <select
                  onChange={(e) =>
                    handleChange('adl', {
                      ...formData.adl,
                      dressing: {
                        ...formData.adl.dressing,
                        buttoning: e.target.value
                      }
                    })
                  }
                >
                  <option>Select Option</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </label>
              <label>
                Lacing -
                <select
                  onChange={(e) =>
                    handleChange('adl', {
                      ...formData.adl,
                      dressing: {
                        ...formData.adl.dressing,
                        lacing: e.target.value
                      }
                    })
                  }
                >
                  <option>Select Option</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </label>
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <h1 className="inline font-semibold"> Toileting - </h1>
              <select
                onChange={(e) =>
                  handleChange('adl', {
                    ...formData.adl,
                    toileting: e.target.value
                  })
                }
              >
                <option>Select Option</option>
                <option value="Indicates">Indicates</option>
                <option value="Not indicates">Not indicates</option>
              </select>
            </div>
            <div className="flex flex-col ml-16 space-y-4">
              <label>
                Bed wetting –
                <select
                  onChange={(e) =>
                    handleChange('adl', {
                      ...formData.adl,
                      bedWetting: e.target.value
                    })
                  }
                >
                  <option>Select Option</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </label>
            </div>
          </div>
        </div>
        <label>
          Sleeping disturbance –
          <select
            onChange={(e) =>
              handleChange('sleepingDisturbance', {
                sleepingDisturbance: e.target.value
              })
            }
          >
            <option>Select Option</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </label>
        <label>
          Time / Money management & concept -
          <input
            onChange={(e) =>
              handleChange('timeMoneyManagement', {
                timeMoneyManagement: e.target.value
              })
            }
            className="outline-none"
          />
        </label>
        <h1 className="font-bold">GROSS AND FINE MOTOR SKILLS :</h1>
        <textarea
          className="resize-none h-40 outline-none border-black border-2 p-2"
          onChange={(e) =>
            handleChange('grossAndFineMotorSkills', {
              grossAndFineMotorSkills: e.target.value
            })
          }
        />
        <h1 className="font-bold">SENSORY PROFILE :</h1>
        <div className="flex flex-col ml-16 space-y-4">
          <label>
            Visual-
            <input
              className="outline-none"
              onChange={(e) =>
                handleChange('sensoryProfile', {
                  ...formData.sensoryProfile,
                  visual: e.target.value
                })
              }
            />
          </label>
          <label>
            Auditory-
            <input
              className="outline-none"
              onChange={(e) =>
                handleChange('sensoryProfile', {
                  ...formData.sensoryProfile,
                  auditory: e.target.value
                })
              }
            />
          </label>
          <label>
            Proprioception-
            <input
              className="outline-none"
              onChange={(e) =>
                handleChange('sensoryProfile', {
                  ...formData.sensoryProfile,
                  proprioception: e.target.value
                })
              }
            />
          </label>
          <label>
            Gustatory & Olfactory-
            <input
              className="outline-none"
              onChange={(e) =>
                handleChange('sensoryProfile', {
                  ...formData.sensoryProfile,
                  gustatoryAndOlfactory: e.target.value
                })
              }
            />
          </label>
          <label>
            Tactile-
            <input
              className="outline-none"
              onChange={(e) =>
                handleChange('sensoryProfile', {
                  ...formData.sensoryProfile,
                  tactile: e.target.value
                })
              }
            />
          </label>
          <label>
            Vestibular-
            <input
              className="outline-none"
              onChange={(e) =>
                handleChange('sensoryProfile', {
                  ...formData.sensoryProfile,
                  vestibular: e.target.value
                })
              }
            />
          </label>
        </div>
        <h1 className="font-bold">IMPRESSION & RECOMMENDATION :</h1>
        <textarea
          className="resize-none h-80 outline-none border-black border-2 p-2"
          onChange={(e) =>
            handleChange('impressionAndRecommendation', {
              impressionAndRecommendation: e.target.value
            })
          }
        />
        <div className="flex justify-around">
          <button
            type="submit"
            className="bg-green-500 text-white p-4 hover:scale-110 mt-8 rounded-md"
            onClick={() => submit()}
          >
            Submit
          </button>
          <button
            type="submit"
            className="bg-green-500 text-white p-4 hover:scale-110 mt-8 rounded-md"
            onClick={() => downloadPDF()}
          >
            Generate Pdf
          </button>
        </div>
      </form>
    </>
  )
}

export default GeneralInfo
