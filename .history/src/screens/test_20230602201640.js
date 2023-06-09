import React, { useState, useEffect } from 'react';
import { Button, Text } from 'react-native';
import Voice from '@react-native-voice/voice';

const SpeechToTextComponent = () => {
  const [spokenText, setSpokenText] = useState('');
  const [isListening, setIsListening] = useState(false);

  useEffect(() => {
    Voice.onSpeechResults = onSpeechResults;

    return () => {
      Voice.destroy().then(Voice.removeAllListeners);
    };
  }, []);

  const onSpeechResults = (event) => {
    const transcription = event.value[0];
    setSpokenText(transcription);
  };

  const startSpeechToText = async () => {
    try {
      await Voice.start('en-US');
      setIsListening(true);
    } catch (error) {
      console.error(error);
    }
  };

  const stopSpeechToText = async () => {
    try {
      await Voice.stop();
      setIsListening(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Button title={isListening ? 'Listening...' : 'Start'} onPress={startSpeechToText} disabled={isListening} />
      <Button title="Stop" onPress={stopSpeechToText} disabled={!isListening} />
      <Text>{spokenText}</Text>
    </>
  );
};

export default SpeechToTextComponent;
