// создаем структуру плейлиста https://www.figma.com/file/1FmTJc1sn9lwzSZRdOewRd/Precourse-%2F-Sprint-%231-%2F-Week-%231?type=design&node-id=11-1371&mode=design&t=Z1LfiBQztfOXxqUl-0
// Данные для плейлиста :
const playList = {
    playListId: '1',
    playListInfo: {
        title:'Hip-Hop Hits',
        coverImgUrl:'lesson-01/Title-List.png',
        totalInfo:{
            totalTrackCount: 4,
            totalTrackDurationInSec: 733
        }
    },
    tracks: [
        {
            trackId: '10',
            trackTitle: 'Rap God',
            artistName: 'Eminem',
            trackCoverImgUrl: 'lesson-01/Eminem.png',
            trackFileUrl :'https://ds.cdn4.deliciouspeaches.com/get/cuts/53/45/5345f1c087ec56d686a21e7013474e74/47964975/Eminem_-_Rap_God_b128f0d364.mp3',
        },
        {
            trackId: '11',
            trackTitle:'In da Club',
            artistName: '50 cent',
            trackCoverImgUrl: 'lesson-01/50Cent.png',
            trackFileUrl :'https://ds.cdn1.deliciouspeaches.com/get/cuts/1d/c9/1dc9bed60952bc86dc754ed6bca8f67d/47965582/50_Cent_-_In_Da_Club_b128f0d193.mp3',
        },
    ]
}
// отрисовка playList. Главная картинка + заголовок
//
// const playListTitleElement = document.createElement('h1')
// playListTitleElement.append(playList.playListInfo.title)
// document.body.append(playListTitleElement)
//
// const playListCoverElement = document.createElement('Img')
// playListCoverElement.src = playList.playListInfo.coverImgUrl
// // можно изменить размер картинки
// // playListCoverElement.style.width = '250px'
// // playListCoverElement.style.height = '250px'
// document.body.append(playListCoverElement)
//
// список треков
//
// const tracksListElement = document.createElement('ul')
// for (let i = 0; i < playList.tracks.length; i++) {
//     const trackElement = document.createElement('li')
//     const trackCoverElement = document.createElement('Img')
//     trackCoverElement.src = playList.tracks[i].trackCoverImgUrl
//     trackElement.append(trackCoverElement)
//     trackElement.append(playList.tracks[i].artistName + ': ' + playList.tracks[i].trackTitle)
//     tracksListElement.append(trackElement)
// }
// document.body.append(tracksListElement)


// создаем функцию для отрисовки любого (any ) плейлиста
function renderPlayList (anyPlayList){
    // функция отрисовки кода
renderHeader(anyPlayList.playListInfo)

    //список треков

    const tracksListElement = document.createElement('ul')
    for (let i = 0; i < anyPlayList.tracks.length; i++) {
        const trackElement = createTrack(anyPlayList.tracks[i])
        tracksListElement.append(trackElement)
    }
    document.body.append(tracksListElement)

    // создаем функцию отрисовки (упрощаем код)
    function renderHeader(anyPlayListInfo){
        const playListTitleElement = document.createElement('h1')
        playListTitleElement.append(anyPlayList.playListInfo.title)
        document.body.append(playListTitleElement)
        const playListCoverElement = document.createElement('Img')
        playListCoverElement.src = anyPlayListInfo.coverImgUrl
        document.body.append(playListCoverElement)
    }
    // список треков функция
    function createTrack(anyTrack){
        const trackElement = document.createElement('li')
        const trackCoverElement = document.createElement('Img')
        trackCoverElement.src = anyTrack.trackCoverImgUrl
        const audio = document.createElement('audio')
        audio.src = anyTrack.trackFileUrl
        audio.controls = true
        trackElement.append(trackCoverElement)
        trackElement.append(anyTrack.artistName + ': ' + anyTrack.trackTitle)
        trackElement.append(audio)
        return trackElement
    }
}
renderPlayList(playList)