import {
  IonButton,
  IonContent,
  IonHeader,
  IonInput,
  IonPage,
  IonText,
  IonTitle,
  IonToolbar
} from '@ionic/react'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { logOut } from '../../api'
import AppLoader from '../../components/basics/AppLoader'
import words from '../../data/words'
import './Dashboard.css'

type WordType = {
  word: string
  done: boolean
  correct: boolean
}

const AppDashboard: React.FC = () => {
  const user = useSelector((state: any) => state.user)
  const history = useHistory()
  const [busy, setBusy] = useState(false)
  const [textWrote, setTextWrote] = useState('')
  const [activeWordList, setActiveWordList] = useState<WordType[]>(
    words
      .slice(0, 10)
      .map(word => ({ word: word, done: false, correct: false }))
  )
  const [activeWordIndex, setActiveWordIndex] = useState(0)
  const [removeIndex, setRemoveIndex] = useState(0)

  const userLogout = async () => {
    setBusy(true)
    await logOut()
    setBusy(false)
    history.replace('/login')
  }
  const onChangeHandler = (event: any) => {
    const eventValue: string = event.target.value
    if (!eventValue.trim()) {
      setTextWrote('')
    } else if (eventValue.slice(-1).match(/\s/)) {
      // do some processing
      setActiveWordList(list => {
        let wordsBlock = [...list]
        wordsBlock[activeWordIndex] = {
          word: '',
          ...wordsBlock[activeWordIndex],
          done: true,
          correct: wordsBlock[activeWordIndex].word === eventValue.trim()
        }
        debugger
        if (wordsBlock.length > 11) {
          wordsBlock[removeIndex] = { word: '', correct: false, done: false }
          setRemoveIndex(current => ++current)
        }
        setActiveWordIndex(activeIndex => ++activeIndex)
        wordsBlock.push({
          word: words[wordsBlock.length] || eventValue.trim(),
          correct: false,
          done: false
        })
        return wordsBlock
      })
      setTextWrote('')
    } else {
      setTextWrote(eventValue)
    }
  }

  return (
    <IonPage>
      <AppLoader isOpen={busy}></AppLoader>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Dashboard</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className='ion-padding'>
        {activeWordList
          .filter(word => !!word.word)
          .map((wordType: any, key: number) => {
            const activeClass =
              wordType.done && wordType.correct
                ? 'dashboard-word-done dashboard-word-correct'
                : wordType.done && !wordType.correct
                ? 'dashboard-word-done dashboard-word-incorrect'
                : ''
            return (
              <span className={`dashboard-words ${activeClass}`} key={key}>
                {wordType.word}
              </span>
            )
          })}
        <IonInput
          placeholder='Write the word'
          value={textWrote}
          onIonChange={onChangeHandler}
        ></IonInput>
        <IonText>
          <p>Hello {user} from dashboard</p>
        </IonText>
        <IonButton onClick={userLogout}>Logout</IonButton>
      </IonContent>
    </IonPage>
  )
}

export default AppDashboard
