const hiragana = [
    [
    {character: 'あ', key: 'a'},
    {character: 'い', key: 'i'},
    {character: 'う', key: 'u'},
    {character: 'え', key: 'e'},
    {character: 'お', key: 'o'}
    ],
    [
    {character: 'か', key: 'ka'},
    {character: 'き', key: 'ki'},
    {character: 'く', key: 'ku'},
    {character: 'け', key: 'ke'},
    {character: 'こ', key: 'ko'},
    ],
    [
    {character: 'さ', key: 'sa'},
    {character: 'し', key: 'shi'},
    {character: 'す', key: 'su'},
    {character: 'せ', key: 'se'},
    {character: 'そ', key: 'so'},
    ],
    [
    {character: 'た', key: 'ta'},
    {character: 'ち', key: 'chi'},
    {character: 'つ', key: 'tsu'},
    {character: 'て', key: 'te'},
    {character: 'と', key: 'to'},    
    ],
    [
    {character: 'な', key: 'na'},
    {character: 'に', key: 'ni'},
    {character: 'ぬ', key: 'nu'},
    {character: 'ね', key: 'ne'},
    {character: 'の', key: 'no'},
    ],
    [
    {character: 'は', key: 'ha'},
    {character: 'ひ', key: 'hi'},
    {character: 'ふ', key: 'hu'},
    {character: 'へ', key: 'he'},
    {character: 'ほ', key: 'ho'},
    ],
    [
    {character: 'ま', key: 'ma'},
    {character: 'み', key: 'mi'},
    {character: 'む', key: 'mu'},
    {character: 'め', key: 'me'},
    {character: 'も', key: 'mo'},    
    ],
    [
    {character: 'や', key: 'ya'},
    {character: '', key: ''},
    {character: 'ゆ', key: 'yu'},
    {character: '', key: ''},
    {character: 'よ', key: 'yo'},   
    ],
    [
    {character: 'ら', key: 'ra'},
    {character: 'り', key: 'ri'},
    {character: 'る', key: 'ru'},
    {character: 'れ', key: 're'},
    {character: 'ろ', key: 'ro'},   
    ],
    [
    {character: 'わ', key: 'wa'},
    {character: '', key: ''},
    {character: '', key: ''},
    {character: '', key: ''},
    {character: 'を', key: 'wo'},
    ],
    [
    {character: 'ん', key: 'n'},   
    ],
]

const hiraganaDakuten = [
    [ 
    {character: 'が', key: 'ga'},
    {character: 'ぎ', key: 'gi'}, 
    {character: 'ぐ', key: 'gu'}, 
    {character: 'げ', key: 'ge'}, 
    {character: 'ご', key: 'go'},  
    ],
    [
    {character: 'ざ', key: 'za'},
    {character: 'じ', key: 'ji'},
    {character: 'ず', key: 'zu'},
    {character: 'ぜ', key: 'ze'},
    {character: 'ぞ', key: 'zo'}, 
    ],
    [
    {character: 'だ', key: 'da'},
    {character: 'ぢ', key: 'dzi'},
    {character: 'づ', key: 'dzu'},
    {character: 'で', key: 'de'},
    {character: 'ど', key: 'do'},
    ],
    [
    {character: 'ば', key: 'ba'},
    {character: 'び', key: 'bi'},
    {character: 'ぶ', key: 'bu'},
    {character: 'べ', key: 'be'},
    {character: 'ぼ', key: 'bo'}, 
    ],
    [
    {character: 'ぱ', key: 'pa'},
    {character: 'ぴ', key: 'pi'},
    {character: 'ぷ', key: 'pu'}, 
    {character: 'ぺ', key: 'pe'},
    {character: 'ぽ', key: 'po'},
    ],
]

let hiraganaAll = [
    
    {character: 'あ', key: 'a'},
    {character: 'い', key: 'i'},
    {character: 'う', key: 'u'},
    {character: 'え', key: 'e'},
    {character: 'お', key: 'o'},
    
    
    {character: 'か', key: 'ka'},
    {character: 'き', key: 'ki'},
    {character: 'く', key: 'ku'},
    {character: 'け', key: 'ke'},
    {character: 'こ', key: 'ko'},
    
    
    {character: 'さ', key: 'sa'},
    {character: 'し', key: 'shi'},
    {character: 'す', key: 'su'},
    {character: 'せ', key: 'se'},
    {character: 'そ', key: 'so'},
    
    
    {character: 'た', key: 'ta'},
    {character: 'ち', key: 'chi'},
    {character: 'つ', key: 'tsu'},
    {character: 'て', key: 'te'},
    {character: 'と', key: 'to'},    
    
    
    {character: 'な', key: 'na'},
    {character: 'に', key: 'ni'},
    {character: 'ぬ', key: 'nu'},
    {character: 'ね', key: 'ne'},
    {character: 'の', key: 'no'},
    
    
    {character: 'は', key: 'ha'},
    {character: 'ひ', key: 'hi'},
    {character: 'ふ', key: 'hu'},
    {character: 'へ', key: 'he'},
    {character: 'ほ', key: 'ho'},
    
    
    {character: 'ま', key: 'ma'},
    {character: 'み', key: 'mi'},
    {character: 'む', key: 'mu'},
    {character: 'め', key: 'me'},
    {character: 'も', key: 'mo'},    
    
    
    {character: 'や', key: 'ya'},
    
    {character: 'ゆ', key: 'yu'},
    
    {character: 'よ', key: 'yo'},   
    
    
    {character: 'ら', key: 'ra'},
    {character: 'り', key: 'ri'},
    {character: 'る', key: 'ru'},
    {character: 'れ', key: 're'},
    {character: 'ろ', key: 'ro'},   
    
    
    {character: 'わ', key: 'wa'},
    
    
    
    {character: 'を', key: 'wo'},
    
    
    {character: 'ん', key: 'n'},   
        
    {character: 'が', key: 'ga'},
    {character: 'ぎ', key: 'gi'}, 
    {character: 'ぐ', key: 'gu'}, 
    {character: 'げ', key: 'ge'}, 
    {character: 'ご', key: 'go'},  
    
    
    {character: 'ざ', key: 'za'},
    {character: 'じ', key: 'ji'},
    {character: 'ず', key: 'zu'},
    {character: 'ぜ', key: 'ze'},
    {character: 'ぞ', key: 'zo'}, 
    
    
    {character: 'だ', key: 'da'},
    {character: 'ぢ', key: 'dzi'},
    {character: 'づ', key: 'dzu'},
    {character: 'で', key: 'de'},
    {character: 'ど', key: 'do'},
    
    
    {character: 'ば', key: 'ba'},
    {character: 'び', key: 'bi'},
    {character: 'ぶ', key: 'bu'},
    {character: 'べ', key: 'be'},
    {character: 'ぼ', key: 'bo'}, 
    
    
    {character: 'ぱ', key: 'pa'},
    {character: 'ぴ', key: 'pi'},
    {character: 'ぷ', key: 'pu'}, 
    {character: 'ぺ', key: 'pe'},
    {character: 'ぽ', key: 'po'},
            
]

export { hiragana, hiraganaDakuten, hiraganaAll }

// const dakutenArrayObj = [
//     {Dakuten: [
//        {ga: [
//            {character: 'が', key: 'ga'},
//            {character: 'ぎ', key: 'gi'}, 
//            {character: 'ぐ', key: 'gu'}, 
//            {character: 'げ', key: 'ge'}, 
//            {character: 'ご', key: 'go'},  
//        ]},
//        {za: [
//            {character: 'ざ', key: 'za'},
//            {character: 'じ', key: 'ji'},
//            {character: 'ず', key: 'zu'},
//            {character: 'ぜ', key: 'ze'},
//            {character: 'ぞ', key: 'zo'},
//        ]},
//        {da: [
//            {character: 'だ', key: 'da'},
//            {character: 'ぢ', key: 'dzi'},
//            {character: 'づ', key: 'dzu'},
//            {character: 'で', key: 'de'},
//            {character: 'ど', key: 'do'},
//        ]},
//        {ba: [
//            {character: 'ば', key: 'ba'},
//            {character: 'び', key: 'bi'},
//            {character: 'ぶ', key: 'bu'},
//            {character: 'べ', key: 'be'},
//            {character: 'ぼ', key: 'bo'}, 
//        ]},
//        {pa: [
//            {character: 'ぱ', key: 'pa'},
//            {character: 'ぴ', key: 'pi'},
//            {character: 'ぷ', key: 'pu'}, 
//            {character: 'ぺ', key: 'pe'},
//            {character: 'ぽ', key: 'po'},
//        ]}
//     ]}   
//    ]    