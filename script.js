let previous=document.querySelector('#pre');
let play=document.querySelector('#play');
let next=document.querySelector('#next');
let title=document.querySelector('#title');
let recent_volume=document.querySelector('#volume');
let volume_show=document.querySelector('#volume_show');
let slider=document.querySelector('#duration_slider');
let show_duration=document.querySelector('#show_duration');
let track_image=document.querySelector('#track_image');
let auto_play=document.querySelector('#auto');
let present=document.querySelector('#present');
let total=document.querySelector('#total');
let artist=document.querySelector('#artist');


let timer;
let autoplay=0;

let index_no=0;
let playing_song=false;

//create audio element
let track=document.createElement('audio');

//all songs list
let All_song=[
    {
        name:"first song",
        path: "music/balusong.mp3",
        img:"C:\Users\ eswar\ OneDrive\ Desktop\ blogss\ spb.jpg",
        singer:"first singer"
    },
    {
        name:"first song",
        path:"blogss/[iSongs.info] 02 - Hoyna Hoyna.mp3",
        img:"blogss/anirudh.jpg",
        singer:"first singer"
    },
    {
        name:"first song",
        path:"blogss/[iSongs.info] 05 - Ye Shwasalo.mp3",
        img:"blogss/spb1.avif",
        singer:"first singer"
    },
    {
        name:"first song",
        path:"blogss/Materani Chinnadani - SenSongsMp3.Co.mp3",
        img:"blogss/spb1.avif",
        singer:"first singer"
    },
    {
        name:"first song",
        path:"blogss/Materani Chinnadani - SenSongsMp3.Co.mp3",
        img:"blogss/spb1.avif",
        singer:"first singer"
    }
];

function load_track(index_no){
    track.src=All_song[index_no].path;
    title.innerHTML=All_song[index_no].name;
    track_image.src=All_song[index_no].img;
    artist.src=All_song[index_no].singer;
    track.load();
}
load_track(index_no);


function justplay(){
    if(playing_song==false){
        playing_song();
    }else{
        pausesong();
    }
}

function playsong(){
    track.play();
    playing_song=true;
    play.innerHTML='<i class="fa fa-pause"></i>';
}