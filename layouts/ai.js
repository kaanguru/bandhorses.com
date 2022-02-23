/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const length = 16;
const probability = 0.5;
const max = Math.pow(2, length) - 1;
const min = 0;
// Hihat
const hihatRhythmMethod = probabilisticRhythm;
const divisions = 1 / 8;
const density = 0.92;
const randomness = 0.7;
const musicalStress = stress[0];
// snare drum constants
const snareRhythmMethod = subDvisionRhythm;
const snareDensity = 0.92;
const snareRandomness = 0.7;
const snareMusicalStress = stress[0];
// bass drum constants
const bassDensity = 0.92;
const bassRandomness = 0.7;
const bassMusicalStress = stress[0];
// cymbal constants
const cymbalDensity = 0.92;
const cymbalRandomness = 0.7;
const cymbalMusicalStress = stress[0];
// builds the rhythm
const rhythm = hihatRhythmMethod(length, probability, divisions, density, randomness, musicalStress);
// builds the snare drum rhythm
const snareRhythm = snareRhythmMethod(length, probability, divisions, snareDensity, snareRandomness, snareMusicalStress);
// builds the bass drum rhythm
const bassRhythm = snareRhythmMethod(length, probability, divisions, bassDensity, bassRandomness, bassMusicalStress);
// builds the cymbal rhythm
const cymbalRhythm = snareRhythmMethod(length, probability, divisions, cymbalDensity, cymbalRandomness, cymbalMusicalStress);
// builds the snare drum rhythm
firstMeasureSnareRhythm = snareRhythmMethod(length, probability, divisions, snareDensity, snareRandomness, snareMusicalStress);
// builds the bass drum rhythm
const doubleCrossRhythm = snareRhythmMethod(length, probability, divisions, bassDensity, bassRandomness, bassMusicalStress);
if (condition === 'hihat') {
    drummers.forEach(drummer => {
        if (drummer.name === 'philCollins') {
            drummer.hihat(rhythm);
        } else if (drummer.name === 'billyCobham') {
            drummer.snare(rhythm);
        } else (drummer.hand === 'rightHanded') {
            return rhythm;
        }
    });
    probability = 0.5;
    max = Math.pow(2, length) - 1;
    min = 0;    // Hihat

} else if (condition === 'snare') {
    return snareRhythm;
} else if (condition === 'bass') {
    return bassRhythm;
} else {
    return cymbalRhythm;
}

