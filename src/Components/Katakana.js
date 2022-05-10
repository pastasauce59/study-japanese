const katakana = [
    [
    {character: 'ア', key: 'a'},
    {character: 'イ', key: 'i'},
    {character: 'ウ', key: 'u'},
    {character: 'エ', key: 'e'},
    {character: 'オ', key: 'o'}
    ],
    [
    {character: 'カ', key: 'ka'},
    {character: 'キ', key: 'ki'},
    {character: 'ク', key: 'ku'},
    {character: 'ケ', key: 'ke'},
    {character: 'コ', key: 'ko'},
    ],
    [
    {character: 'サ', key: 'sa'},
    {character: 'シ', key: 'shi'},
    {character: 'ス', key: 'su'},
    {character: 'セ', key: 'se'},
    {character: 'ソ', key: 'so'},
    ],
    [
    {character: 'タ', key: 'ta'},
    {character: 'チ', key: 'chi'},
    {character: 'ツ', key: 'tsu'},
    {character: 'テ', key: 'te'},
    {character: 'ト', key: 'to'},    
    ],
    [
    {character: 'ナ', key: 'na'},
    {character: 'ニ', key: 'ni'},
    {character: 'ヌ', key: 'nu'},
    {character: 'ネ', key: 'ne'},
    {character: 'ノ', key: 'no'},
    ],
    [
    {character: 'ハ', key: 'ha'},
    {character: 'ヒ', key: 'hi'},
    {character: 'フ', key: 'hu'},
    {character: 'ヘ', key: 'he'},
    {character: 'ホ', key: 'ho'},
    ],
    [
    {character: 'マ', key: 'ma'},
    {character: 'ミ', key: 'mi'},
    {character: 'ム', key: 'mu'},
    {character: 'メ', key: 'me'},
    {character: 'モ', key: 'mo'},    
    ],
    [
    {character: 'ヤ', key: 'ya'},
    {character: '', key: ''},
    {character: 'ユ', key: 'yu'},
    {character: '', key: ''},
    {character: 'ヨ', key: 'yo'},   
    ],
    [
    {character: 'ラ', key: 'ra'},
    {character: 'リ', key: 'ri'},
    {character: 'ル', key: 'ru'},
    {character: 'レ', key: 're'},
    {character: 'ロ', key: 'ro'},   
    ],
    [
    {character: 'ワ', key: 'wa'},
    {character: '', key: ''},
    {character: '', key: ''},
    {character: '', key: ''},
    {character: 'ヲ', key: 'wo'},
    ],
    [
    {character: 'ン', key: 'n'},   
    ],
]

const katakanaDakuten = [
    [ 
    {character: 'ガ', key: 'ga'},
    {character: 'ギ', key: 'gi'}, 
    {character: 'グ', key: 'gu'}, 
    {character: 'ゲ', key: 'ge'}, 
    {character: 'ゴ', key: 'go'},  
    ],
    [
    {character: 'ザ', key: 'za'},
    {character: 'ジ', key: 'ji'},
    {character: 'ズ', key: 'zu'},
    {character: 'ゼ', key: 'ze'},
    {character: 'ゾ', key: 'zo'}, 
    ],
    [
    {character: 'ダ', key: 'da'},
    {character: 'ヂ', key: 'dzi'},
    {character: 'ヅ', key: 'dzu'},
    {character: 'デ', key: 'de'},
    {character: 'ド', key: 'do'},
    ],
    [
    {character: 'バ', key: 'ba'},
    {character: 'ビ', key: 'bi'},
    {character: 'ブ', key: 'bu'},
    {character: 'ベ', key: 'be'},
    {character: 'ボ', key: 'bo'}, 
    ],
    [
    {character: 'パ', key: 'pa'},
    {character: 'ピ', key: 'pi'},
    {character: 'プ', key: 'pu'}, 
    {character: 'ペ', key: 'pe'},
    {character: 'ポ', key: 'po'},
    ],
]

let katakanaBase = [
    {character: 'ア', key: 'a'},
    {character: 'イ', key: 'i'},
    {character: 'ウ', key: 'u'},
    {character: 'エ', key: 'e'},
    {character: 'オ', key: 'o'},

    {character: 'カ', key: 'ka'},
    {character: 'キ', key: 'ki'},
    {character: 'ク', key: 'ku'},
    {character: 'ケ', key: 'ke'},
    {character: 'コ', key: 'ko'},

    {character: 'サ', key: 'sa'},
    {character: 'シ', key: 'shi'},
    {character: 'ス', key: 'su'},
    {character: 'セ', key: 'se'},
    {character: 'ソ', key: 'so'},

    {character: 'タ', key: 'ta'},
    {character: 'チ', key: 'chi'},
    {character: 'ツ', key: 'tsu'},
    {character: 'テ', key: 'te'},
    {character: 'ト', key: 'to'},    

    {character: 'ナ', key: 'na'},
    {character: 'ニ', key: 'ni'},
    {character: 'ヌ', key: 'nu'},
    {character: 'ネ', key: 'ne'},
    {character: 'ノ', key: 'no'},

    {character: 'ハ', key: 'ha'},
    {character: 'ヒ', key: 'hi'},
    {character: 'フ', key: 'hu'},
    {character: 'ヘ', key: 'he'},
    {character: 'ホ', key: 'ho'},

    {character: 'マ', key: 'ma'},
    {character: 'ミ', key: 'mi'},
    {character: 'ム', key: 'mu'},
    {character: 'メ', key: 'me'},
    {character: 'モ', key: 'mo'},    

    {character: 'ヤ', key: 'ya'},
    
    {character: 'ユ', key: 'yu'},
    
    {character: 'ヨ', key: 'yo'},   

    {character: 'ラ', key: 'ra'},
    {character: 'リ', key: 'ri'},
    {character: 'ル', key: 'ru'},
    {character: 'レ', key: 're'},
    {character: 'ロ', key: 'ro'},   

    {character: 'ワ', key: 'wa'},
    
    {character: 'ヲ', key: 'wo'},

    {character: 'ン', key: 'n'}
]

let dakuten = [
    {character: 'ガ', key: 'ga'},
    {character: 'ギ', key: 'gi'}, 
    {character: 'グ', key: 'gu'}, 
    {character: 'ゲ', key: 'ge'}, 
    {character: 'ゴ', key: 'go'},  

    {character: 'ザ', key: 'za'},
    {character: 'ジ', key: 'ji'},
    {character: 'ズ', key: 'zu'},
    {character: 'ゼ', key: 'ze'},
    {character: 'ゾ', key: 'zo'}, 

    {character: 'ダ', key: 'da'},
    {character: 'ヂ', key: 'dzi'},
    {character: 'ヅ', key: 'dzu'},
    {character: 'デ', key: 'de'},
    {character: 'ド', key: 'do'},

    {character: 'バ', key: 'ba'},
    {character: 'ビ', key: 'bi'},
    {character: 'ブ', key: 'bu'},
    {character: 'ベ', key: 'be'},
    {character: 'ボ', key: 'bo'}, 

    {character: 'パ', key: 'pa'},
    {character: 'ピ', key: 'pi'},
    {character: 'プ', key: 'pu'}, 
    {character: 'ペ', key: 'pe'},
    {character: 'ポ', key: 'po'} 
]

let katakanaAll = [
    {character: 'ア', key: 'a'},
    {character: 'イ', key: 'i'},
    {character: 'ウ', key: 'u'},
    {character: 'エ', key: 'e'},
    {character: 'オ', key: 'o'},

    {character: 'カ', key: 'ka'},
    {character: 'キ', key: 'ki'},
    {character: 'ク', key: 'ku'},
    {character: 'ケ', key: 'ke'},
    {character: 'コ', key: 'ko'},

    {character: 'サ', key: 'sa'},
    {character: 'シ', key: 'shi'},
    {character: 'ス', key: 'su'},
    {character: 'セ', key: 'se'},
    {character: 'ソ', key: 'so'},

    {character: 'タ', key: 'ta'},
    {character: 'チ', key: 'chi'},
    {character: 'ツ', key: 'tsu'},
    {character: 'テ', key: 'te'},
    {character: 'ト', key: 'to'},    

    {character: 'ナ', key: 'na'},
    {character: 'ニ', key: 'ni'},
    {character: 'ヌ', key: 'nu'},
    {character: 'ネ', key: 'ne'},
    {character: 'ノ', key: 'no'},

    {character: 'ハ', key: 'ha'},
    {character: 'ヒ', key: 'hi'},
    {character: 'フ', key: 'hu'},
    {character: 'ヘ', key: 'he'},
    {character: 'ホ', key: 'ho'},

    {character: 'マ', key: 'ma'},
    {character: 'ミ', key: 'mi'},
    {character: 'ム', key: 'mu'},
    {character: 'メ', key: 'me'},
    {character: 'モ', key: 'mo'},    

    {character: 'ヤ', key: 'ya'},
    
    {character: 'ユ', key: 'yu'},
    
    {character: 'ヨ', key: 'yo'},   

    {character: 'ラ', key: 'ra'},
    {character: 'リ', key: 'ri'},
    {character: 'ル', key: 'ru'},
    {character: 'レ', key: 're'},
    {character: 'ロ', key: 'ro'},   

    {character: 'ワ', key: 'wa'},
    
    {character: 'ヲ', key: 'wo'},

    {character: 'ン', key: 'n'},   
 
    {character: 'ガ', key: 'ga'},
    {character: 'ギ', key: 'gi'}, 
    {character: 'グ', key: 'gu'}, 
    {character: 'ゲ', key: 'ge'}, 
    {character: 'ゴ', key: 'go'},  

    {character: 'ザ', key: 'za'},
    {character: 'ジ', key: 'ji'},
    {character: 'ズ', key: 'zu'},
    {character: 'ゼ', key: 'ze'},
    {character: 'ゾ', key: 'zo'}, 

    {character: 'ダ', key: 'da'},
    {character: 'ヂ', key: 'dzi'},
    {character: 'ヅ', key: 'dzu'},
    {character: 'デ', key: 'de'},
    {character: 'ド', key: 'do'},

    {character: 'バ', key: 'ba'},
    {character: 'ビ', key: 'bi'},
    {character: 'ブ', key: 'bu'},
    {character: 'ベ', key: 'be'},
    {character: 'ボ', key: 'bo'}, 

    {character: 'パ', key: 'pa'},
    {character: 'ピ', key: 'pi'},
    {character: 'プ', key: 'pu'}, 
    {character: 'ペ', key: 'pe'},
    {character: 'ポ', key: 'po'},
]

let randomize = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }

      return array
}
let rndmKataBase = randomize([...katakanaBase])
let rndmKataDak = randomize ([...dakuten])
let rndmKataAll = randomize([...katakanaAll])

export { katakana, katakanaDakuten, katakanaAll, rndmKataBase, rndmKataDak, rndmKataAll }