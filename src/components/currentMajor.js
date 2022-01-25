import CommunicationDesigners from '../assets/data/personDataV4-communication.json'
import MediaDesigners from '../assets/data/personDataV4-media.json'
import SoundDesigners from '../assets/data/personDataV4-sound.json'
import InteractionDesigners from '../assets/data/personDataV4-interaction.json'

export const currentMajor = (selectedMajor) => {

    if (selectedMajor === 0) {
        return CommunicationDesigners;
    }
    if (selectedMajor === 1) {
        return MediaDesigners;
    }
    if (selectedMajor === 2) {
        return SoundDesigners;
    }
    if (selectedMajor === 3) {
        return InteractionDesigners;
    }

}

