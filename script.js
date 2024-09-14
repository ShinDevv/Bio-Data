const strandSelect = document.getElementById('strand');
const sectionSelect = document.getElementById('section');

strandSelect.addEventListener('change', function() {
  
  const selectedValue = strandSelect.value;
  sectionSelect.style.display = 'block';
  sectionSelect.innerHTML = '';
 
  if (selectedValue === 'humms') {
    const hummsOptions = [
     { value: 'humms-option-1', text: 'HUMMS 1' },
     { value: 'humms-option-2', text: 'HUMMS 2' },
     { value: 'humms-option-3', text: 'HUMMS 3' },
     { value: 'humms-option-4', text: 'HUMMS 4' },
     { value: 'humms-option-5', text: 'HUMMS 5' },
     { value: 'humms-option-6', text: 'HUMMS 6' },
     { value: 'humms-option-7', text: 'HUMMS 7' },
     { value: 'humms-option-8', text: 'HUMMS 8' },
     { value: 'humms-option-9', text: 'HUMMS 9' }
    ];

    hummsOptions.forEach(function(option) {
      const opt = document.createElement('option');
      opt.value = option.value;
      opt.text = option.text;
      sectionSelect.appendChild(opt);
    });
  } else if (selectedValue === 'abm') {
    const abmOptions = [
     { value: 'abm-option-1', text: 'ABM 1' },
     { value: 'abm-option-2', text: 'ABM 2' },
     { value: 'abm-option-3', text: 'ABM 3' }
    ];

    abmOptions.forEach(function(option) {
      const opt = document.createElement('option');
      opt.value = option.value;
      opt.text = option.text;
      sectionSelect.appendChild(opt);
    });
  } else if (selectedValue === 'stem') {
      const stemOptions = [
      {value: 'stem-option-1', text: 'STEM 1'},
      {value: 'stem-option-2', text: 'STEM 2'},
      {value: 'stem-option-3', text: 'STEM 3'},
      {value: 'stem-option-4', text: 'STEM 4'},
      {value: 'stem-option-5', text: 'STEM 5'},
      {value: 'stem-option-6', text: 'STEM 6'},
      {value: 'stem-option-7', text: 'STEM 7'}         
   ];
   
   stemOptions.forEach(function(option) {
     const opt = document.createElement('option');
     opt.value = option.value;
     opt.text = option.text;
     sectionSelect.appendChild(opt);
   });
  } else if (selectedValue === 'he') {
      const heOptions = [
      {value: 'he-option-1', text: 'TVL - HE 1'},
      {value: 'he-option-2', text: 'TVL - HE 2'},
      {value: 'he-option-3', text: 'TVL - HE 3'},
      {value: 'he-option-4', text: 'TVL - HE 4'},
      {value: 'he-option-5', text: 'TVL - HE 5'},
      {value: 'he-option-6', text: 'TVL - HE 6'}
   ];
   
   heOptions.forEach(function(option){
       const opt = document.createElement('option');
       opt.value = option.value;
       opt.text = option.text;
       sectionSelect.appendChild(opt);
   }); 
  } else if (selectedValue === 'ict') {
      const ictOptions = [
      {value: 'ict-option-1', text: 'TVL - ICT 1'},
      {value: 'ict-option-2', text: 'TVL - ICT 2'},
      {value: 'ict-option-3', text: 'TVL - ICT 3'}
   ];
   
   ictOptions.forEach(function(option){
       const opt = document.createElement('option');
       opt.value = option.value;
       opt.text = option.text;
       sectionSelect.appendChild(opt);
   });
  } else if (selectedValue === 'smaw') {
      const smawOptions = [
      {value: 'smaw-option-1', text: 'TVL - SMAW 1'},
      {value: 'smaw-option-2', text: 'TVL - SMAW 2'},
      {value: 'smaw-option-3', text: 'TVL - SMAW 3'}
      ];
   smawOptions.forEach(function(option) {
       const opt = document.createElement('option');
       opt.value = option.value;
       opt.text = option.text;
       sectionSelect.appendChild(opt);
   });
  } else if (selectedValue === 'aseim') {
      const aseimOptions = [
      {value: 'aseim-option-1', text: 'TVL - AS/EIM 1'},
      {value: 'aseim-option-2', text: 'TVL - AS/EIM 2'}
      ];
   aseimOptions.forEach(function(option) {
       const opt = document.createElement('option');
       opt.value = option.value;
       opt.text = option.text;
       sectionSelect.appendChild(opt);
   });
  }
})