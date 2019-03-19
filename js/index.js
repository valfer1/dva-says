 function playedSound(){
 }


function playSound() {
  
  var audio = new Audio();
  var playlist = new Array(
    "https://gamepedia.cursecdn.com/overwatch_gamepedia/f/f6/D.Va_-_I%27m_gonna_have_to_shoot_you_down.ogg",
    "https://gamepedia.cursecdn.com/overwatch_gamepedia/7/73/D.nied.ogg",
    "https://gamepedia.cursecdn.com/overwatch_gamepedia/a/a0/D.Va_-_Bunny_hop.ogg",
    "https://gamepedia.cursecdn.com/overwatch_gamepedia/6/60/D.Va_-_Nerf_this%21.ogg",
    "https://gamepedia.cursecdn.com/overwatch_gamepedia/d/dd/D.Va_-_I_play_to_win%21.ogg",
    "https://gamepedia.cursecdn.com/overwatch_gamepedia/3/36/D.Va_-_I_can%27t_wait_to_get_into_the_fight.ogg",
    "https://gamepedia.cursecdn.com/overwatch_gamepedia/7/70/D.Va_-_Let%27s_shoot_for_a_new_high_score%21.ogg",
    "https://gamepedia.cursecdn.com/overwatch_gamepedia/a/a2/D.Va_-_Gameface_on.ogg",
    "https://gamepedia.cursecdn.com/overwatch_gamepedia/5/5f/D.Va_-_Think_you_can_keep_up_with_me.ogg",
    "https://gamepedia.cursecdn.com/overwatch_gamepedia/6/6e/D.Va_-_I%27m_going_to_own_all_these_noobs%21.ogg",
    "https://gamepedia.cursecdn.com/overwatch_gamepedia/3/3f/D.Va_-_I%27m_too_young_to_die.ogg",
    "https://gamepedia.cursecdn.com/overwatch_gamepedia/9/93/D.Va_-_I%27m_not_a_good_loser.ogg",
    "https://gamepedia.cursecdn.com/overwatch_gamepedia/c/cf/D.Va_-_Jjajeungna.ogg",
    "https://gamepedia.cursecdn.com/overwatch_gamepedia/0/08/D.Va_-_Boom_shakalaka_she%27s_on_fire.ogg",
    "https://gamepedia.cursecdn.com/overwatch_gamepedia/6/63/Kr_%281%29.ogg",
    "https://gamepedia.cursecdn.com/overwatch_gamepedia/0/0f/D.Va_-_D.Va_online.ogg",
    "https://gamepedia.cursecdn.com/overwatch_gamepedia/e/ed/There%27s_no_way_I%27m_losing._Attack%21.ogg",
    "https://gamepedia.cursecdn.com/overwatch_gamepedia/d/dc/Dva_with_the_score_d.va.ogg",
    "https://gamepedia.cursecdn.com/overwatch_gamepedia/0/07/D.Va_-_Love_D.Va.ogg",
    "https://gamepedia.cursecdn.com/overwatch_gamepedia/c/cb/D.Va_-_Are_you_even_trying.ogg",
    "https://gamepedia.cursecdn.com/overwatch_gamepedia/3/35/Epic%21.ogg",
    "https://gamepedia.cursecdn.com/overwatch_gamepedia/3/3f/D.Va_-_Get_owned.ogg",
    "https://gamepedia.cursecdn.com/overwatch_gamepedia/7/74/D.Va_-_Shut_down.ogg",
    "https://gamepedia.cursecdn.com/overwatch_gamepedia/2/22/D.Va_-_Don%27t_mess_with_me%21.ogg",
    "https://gamepedia.cursecdn.com/overwatch_gamepedia/b/bc/D.Va_-_Revenge_is_sweet.ogg",
    "https://gamepedia.cursecdn.com/overwatch_gamepedia/4/4a/D.Va_-_D.Va_1_bad_guys_0.ogg",
    "https://gamepedia.cursecdn.com/overwatch_gamepedia/9/90/D.Va_-_I_play_to_win_korean.ogg",
    "https://gamepedia.cursecdn.com/overwatch_gamepedia/4/4c/D.Va_-_Easy_mode.ogg",
    "https://gamepedia.cursecdn.com/overwatch_gamepedia/a/a4/D.Va_-_Lol.ogg",
    "https://gamepedia.cursecdn.com/overwatch_gamepedia/3/30/D.Va_-_Winky_face.ogg",
    "https://gamepedia.cursecdn.com/overwatch_gamepedia/e/e2/Oh_thatll_be_play_of_the_game.ogg"
  );
  var index = Math.floor(Math.random() * playlist.length);
  audio.src = playlist[index];
  audio.play();
  
  switch (audio.src) {
    case playlist[0]:
      text = "I'm gonna have to shoot you down.";
      break;
    case playlist[1]:
      text = "D.nied!";
      break;
    case playlist[2]:
      text = "Bunny hop!";
      break;
    case playlist[3]:
      text = "Nerf this!";
      break;
    case playlist[4]:
      text = "I play to win!";
      break;
    case playlist[5]:
      text = "I can't wait to get into the fight.";
      break;
    case playlist[6]:
      text = "Let's shoot for a new high score!";
      break;
    case playlist[7]:
      text = "Alright. Gameface: On.";
      break;
    case playlist[8]:
      text = "Think you can keep up with me?";
      break;
    case playlist[9]:
      text = "I'm going to own all these noobs!";
      break;
    case playlist[10]:
      text = "I'm too young to die.";
      break;
    case playlist[11]:
      text = "I'm not a good loser.";
      break;
    case playlist[12]:
      text = "Ooh, jjajeungna. (Ooh, annoying)";
      break;
    case playlist[13]:
      text = "Boom shakalaka! She's on fire!";
      break;
    case playlist[14]:
      text = "Aa, yeolbatne! (Ah, that pissed me off!)";
      break;
    case playlist[15]:
      text = "D.va online.";
      break;
    case playlist[16]:
      text = "There's no way I'm losing. Attack!";
      break;
    case playlist[17]:
      text = "D.Va with the score!";
      break;
    case playlist[18]:
      text = "Love, D.va.";
      break;
    case playlist[19]:
      text = "Are you even trying?";
      break;
    case playlist[20]:
      text = "Epic!";
      break;
    case playlist[21]:
      text = "Get owned!";
      break;
    case playlist[22]:
      text = "Shot down!";
      break;
    case playlist[23]:
      text = "Don't mess with me!";
      break;
    case playlist[24]:
      text = "Revenge is sweet.";
      break;
    case playlist[25]:
      text = "D.va: 1. Bad guys: 0.";
      break;
    case playlist[26]:
      text = "Geim-eul hamyeon, igyeoyaji. (I play to win!)";
      break;
    case playlist[27]:
      text = "Is this easy mode?";
      break;
    case playlist[28]:
      text = "LOL.";
      break;
    case playlist[29]:
      text = "Winkyface.";
      break;
    case playlist[30]:
      text = "Oh, that'll be play of the game! Just wait and see. ";
      break;
  }
  
  
  document.getElementById("text").classList.remove("ani");
// offsetWidth triggers reflow
void document.getElementById("text").offsetWidth;
document.getElementById("text").classList.add("ani");
document.getElementById("text").innerText = '"' + text + '"';

}