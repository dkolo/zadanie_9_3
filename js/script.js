var text = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.',
	 dinosaur = 'triceratops',
	 dinosaurUpperCased = dinosaur.toUpperCase(),
	 correctedText = text.replace('Velociraptor', dinosaurUpperCased);
console.log(correctedText.slice(0, correctedText.length / 2) );