import React, { useState, useEffect } from 'react';
import ProgressCounter from './components/ProgressCounter';
import ProgressBar from './components/ProgressBar';
import { AddButton, ShortButton } from './components/Buttons';
import CustomAmount from './components/CustomAmount';
import Header from './components/Header';
import Footer from './components/Footer';
import confettiSoundFile from './assets/confetti.mp3';
import snakeSoundFile from './assets/snake.mp3'
import damageSoundFile from './assets/damage.mp3'
import confetti from 'canvas-confetti';
import InfoDialog from './components/InfoDialog';

export default function ParentComponent() {
    /* COUNTER CONFIG */
    const randomPorcent = Math.floor(Math.random() * 100);

    const [counter, setCounter] = useState(0);

    useEffect( () => {
        setCounter(randomPorcent);
    }, [])


    const updateCounter = (valor, set) => {
        if (set) {
            setCounter(valor)
        } else {
            const newCounter = counter + valor;
            setCounter(Math.max(0, Math.min(100, newCounter))); 
        }
    };

    /* SOUND EFFECT */
    const [mute, setMute] = useState(() => {
        const savedMute = localStorage.getItem('mute');
        return savedMute === 'true';
    });

    const toggleMute = () => {
        setMute(prevMute => !prevMute);
    };

    useEffect(() => {
        localStorage.setItem('mute', mute);
    }, [mute]);

    useEffect(() => {
        if (counter === 100) {
            const confettiSound = new Audio(confettiSoundFile);
            if (!mute) {
                confettiSound.play().catch(error => {
                    console.error("Error playing sound:", error);
                });
            }
            confetti({
                particleCount: 100,
                startVelocity: 50,
                spread: 360,
                origin: {
                    x: Math.random(),
                    y: Math.random() - 0.2
                }
            }).catch(error => {
                console.error("Error creating confetti:", error);
            });
        }
    }, [counter, mute]); // Confetti cuando counter llega a 100

    useEffect(() => {
        if (counter === 0) {
            const damageSound = new Audio(damageSoundFile);
            if (!mute) {
                damageSound.play().catch(error => {
                    console.error("Error playing sound:", error);
                });
            }
        }
    }, [counter, mute]); // Daño cuando counter llega a 0

    
    useEffect(() => {
        if (counter > 0 && counter < 100) {
            const snakeSound = new Audio(snakeSoundFile);
            if (!mute) {
                snakeSound.play().catch(error => {
                    console.error("Error playing sound:", error);
                });
            }
        }
    }, [counter, mute]); // Sonido de serpiente al actualizarse counter

    /* INFODIALOG CONFIG */
    const [showInfoDialog, setShowInfoDialog] = useState(false);

    const toggleInfoDialog = () => {
        setShowInfoDialog(prevShowInfoDialog => !prevShowInfoDialog);
    };

    return (
        <div className="container">
            <Header toggleMute={toggleMute} mute={mute} showInfoDialog={showInfoDialog} toggleInfoDialog={toggleInfoDialog}></Header>
            <main>
                <ProgressCounter counter={counter}></ProgressCounter>
                <ProgressBar counter={counter}></ProgressBar>
                <section className="interactive">
                    <section className="addButtons">
                        <AddButton data_value={5} updateCounter={updateCounter}></AddButton>
                        <AddButton data_value={10} updateCounter={updateCounter}></AddButton>
                        <AddButton data_value={20} updateCounter={updateCounter}></AddButton>
                    </section>
                    <section className="customAmount">
                        <CustomAmount updateCounter={updateCounter} counter={counter}></CustomAmount>
                    </section>
                    <section className="shortAmount">
                        <ShortButton data_value={0} updateCounter={updateCounter}></ShortButton>
                        <ShortButton data_value={50} updateCounter={updateCounter}></ShortButton>
                        <ShortButton data_value={100} updateCounter={updateCounter}></ShortButton>
                    </section>
                </section>
            </main>
            <Footer></Footer>
            <InfoDialog showInfoDialog={showInfoDialog} toggleInfoDialog={toggleInfoDialog} open={showInfoDialog}></InfoDialog>
        </div>
    );
}