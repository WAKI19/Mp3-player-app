//関数
function active(elem) {
  elem.classList.remove("hidden");
  elem.classList.add("active");
}

function hide(elem) {
  elem.classList.remove("active");
  elem.classList.add("hidden");
}


// イベントはここにまとめる
document.addEventListener("DOMContentLoaded", () => {

  //要素取得
    //全曲ページ
  const allSongsSearchInput = document.getElementById('all-songs-search-input');
  const allSongsSearchClearBtn = document.getElementById("all-songs-search-clear-btn");

    //プレイリストページ
  const newPlaylistModalOpenBtn = document.getElementById("new-playlist-modal-open-btn");
  const newPlaylistModalCloseBtn = document.getElementById("new-playlist-modal-close-btn");
  const newPlaylistModal = document.getElementById("new-playlist-modal");
  const playlistList = document.getElementById("playlist-list");
  const playlistDetail = document.getElementById("playlist-detail");
  const playlistDetailCloseBtn = document.getElementById("playlist-detail-close-btn");

  const miniPlayer = document.getElementById("mini-player");

  const fullPlayer = document.getElementById("full-player");
  const fullPlayerCloseBtn = document.getElementById("full-player-close-btn");

  const tabs = document.querySelectorAll(".tab-button");
  const contents = document.querySelectorAll(".tab-content");


  //イベント
    //全曲ページ
  allSongsSearchInput.addEventListener('input', () => {
    if (allSongsSearchInput.value.trim() !== '') {
      allSongsSearchClearBtn.style.display = 'block';
    } else {
      allSongsSearchClearBtn.style.display = 'none';
    }
  });

  allSongsSearchClearBtn.addEventListener('click', () => {
    allSongsSearchInput.value = '';
    allSongsSearchInput.focus();
    allSongsSearchClearBtn.style.display = 'none';
  });

    //プレイリストページ
  newPlaylistModalOpenBtn.addEventListener('click', () => {
    active(newPlaylistModal);
  });

  newPlaylistModalCloseBtn.addEventListener('click', () => {
    hide(newPlaylistModal);
  });

  playlistList.addEventListener('click', (e) => {
    const li = e.target.closest('li');
    if (li && playlistList.contains(li)) {
      active(playlistDetail);
    }
  });

  playlistDetailCloseBtn.addEventListener('click', () => {
    hide(playlistDetail);
  });

    //ミニプレーヤー
  miniPlayer.addEventListener('click', (e) => {
    if (e.target.id === "mini-player-play-pause-btn") return;
    active(fullPlayer);
    hide(miniPlayer);
  });

    //フルプレーヤー
  fullPlayerCloseBtn.addEventListener('click', () => {
    hide(fullPlayer);
    active(miniPlayer);
  });

    //タブ
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      const targetId = tab.getAttribute("data-target");

      // タブ切り替え
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");

      // コンテンツ切り替え
      contents.forEach(content => {
        content.classList.toggle("active", content.id === targetId);
      });
    });
  });
});
