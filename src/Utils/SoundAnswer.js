
const playSound = (soundFile) => {
    const audio = new Audio(`/assets/sound/${soundFile}`);
    audio.play().catch(error => console.error('Error playing sound:', error));
  };
  
  export const SoundAnswer = (soundFile) => {
    playSound(soundFile);
  };
  
  export default SoundAnswer;