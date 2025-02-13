function showSurprise() {
    const surprise = document.getElementById('surprise');
    surprise.classList.toggle('hidden');

    if (!surprise.classList.contains('hidden')) {
        surprise.innerHTML = `
            <div class="letter">
                <h2 class="hehe">🌸 Buat Pacar Anip 🌸</h2>
                <p>Halo, Ndut! 💖</p>
                <p>Hari ini bukan cuman tentang Valentine, tapi tentang kau, kau orang yang selalu buat aku kesal sedih marah senang bahagie, dan kau selalu ngebuat hari aku seru, lebeh tepatnye sih lebeh indah la ye nyebotnye wkwk, aku ndak bise ngasik sesuatu yang mahal, tapi aku kasik sesuatu yang spesial, barang ni aku buat sorang, BTW aku minta maaf ye tadik suboh pas kau bangon nyuroh aku tidok tetap kubantai gak, aku tau kau pasti marah same aku, ndak ndak badmood la tadik suboh tu, tapi tak pe la yang penting aku sesaikan bende ni lok, barok aku tidok.</p>
                <p>Website ini mungkin ndak bise ngasik tau kau sebesak ape sayangnye aku ke kau dut, tapi at least pas kau baca ini kau bise senyum senyum bodo la wkwk. Setiap hari ade yak hal kau yang buat aku senang, dari cerite cerite kau, jokes jokes yang ndak jelas, banyak la hari hari kite ni, kite selalu ngebuat hari kite ade hal baru.</p>
                <p>Makaseh yee ndut udah orang yang bise sesabar ini same aku, bise selalu sayang same aku. Aku cumak maok kau tau satu ini yak, Aku bersyukur sekali punye kau di idop aku dut, aku janji aku ndak akan ngecewekan kau agik. Semoge kite selalu kayak ginik ye?, maok jarak pun yang ngalangi kite tetap same same, aku pengen kite selalu bahagie dut, selalu cerite apepun itu disetiap malam dekat nak tidok, ngerandom jokes ndak jelas hehe. Intinye kau orang yang ngebuat aku ngerase sempurne, walopun banyak kekurangan, tapi saat same kau aku ngerase kau ngebuat aku jadi sempurne. Aku Sayang Kau, Hari ini, Besok, dan hingga MENUA di RUMAH KITE NANTIK.</p>
                <p>Happy Valentine Day yaa Ayang 💕</p>
                <p>I LOVE YOU 3000 NDUT</p>
            </div>
        `;
    }
}

// audio //
document.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('background-audio');
    audio.volume = 0.3; // Atur volume ke 50%
    
    // Coba mainkan audio otomatis
    audio.play().catch(error => {
        console.warn('Autoplay tidak diizinkan oleh browser:', error);
    });
});
