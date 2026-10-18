/* ==========================================================================
   QASIM WEDS ZOYA - 3D ICONS, 3D SCULPTED COUPLE & BACKGROUND AUDIO LOOP
   ========================================================================== */

/* --------------------------------------------------------------------------
   1. YOUTUBE BACKGROUND MUSIC AUTO-LOOP (VIDEO ID: j85uxa8XXRU)
   -------------------------------------------------------------------------- */
let ytPlayer = null;
let isMusicPlaying = false;
const YOUTUBE_VIDEO_ID = 'j85uxa8XXRU'; // Akhiyan De Samne Tu Baitha Ravein Der Tak - Zain Zohaib

(function loadYouTubeAPI() {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
})();

window.onYouTubeIframeAPIReady = function () {
    ytPlayer = new YT.Player('yt-player', {
        height: '1',
        width: '1',
        videoId: YOUTUBE_VIDEO_ID,
        playerVars: {
            autoplay: 1,
            loop: 1,
            playlist: YOUTUBE_VIDEO_ID,
            controls: 0,
            disablekb: 1,
            fs: 0,
            modestbranding: 1,
            playsinline: 1,
            rel: 0
        },
        events: {
            onReady: onPlayerReady,
            onStateChange: onPlayerStateChange
        }
    });
};

function onPlayerReady(event) {
    event.target.setVolume(100);
    event.target.playVideo();
}

function onPlayerStateChange(event) {
    const musicWidget = document.getElementById('music-widget');
    const musicStatus = document.getElementById('music-status');

    // Seamless infinite loop
    if (event.data === YT.PlayerState.ENDED) {
        ytPlayer.seekTo(0);
        ytPlayer.playVideo();
    }

    if (event.data === YT.PlayerState.PLAYING) {
        isMusicPlaying = true;
        if (musicWidget) musicWidget.classList.remove('paused');
        if (musicStatus) musicStatus.textContent = 'Playing Loop • Zain Zohaib';
    } else if (event.data === YT.PlayerState.PAUSED) {
        isMusicPlaying = false;
        if (musicWidget) musicWidget.classList.add('paused');
        if (musicStatus) musicStatus.textContent = 'Music Paused (Tap to Play)';
    }
}

function startOrUnmuteMusic() {
    if (ytPlayer && typeof ytPlayer.playVideo === 'function') {
        ytPlayer.unMute();
        ytPlayer.setVolume(100);
        ytPlayer.playVideo();
    }
}

/* --------------------------------------------------------------------------
   2. TRUE 3D VOLUMETRIC ICON GENERATOR (GLOSSY 3D GOLD & JEWEL ICONS)
   -------------------------------------------------------------------------- */
function generate3DIconDataUrl(iconType) {
    const canvas = document.createElement('canvas');
    canvas.width = 180;
    canvas.height = 180;
    const ctx = canvas.getContext('2d');

    const gold3D = ctx.createLinearGradient(25, 20, 155, 160);
    gold3D.addColorStop(0, '#fff9db');
    gold3D.addColorStop(0.3, '#ffd54f');
    gold3D.addColorStop(0.65, '#d4af37');
    gold3D.addColorStop(1, '#6b4704');

    const darkGold = '#5c3d03';

    function draw3DBadgeBase(rimColor = '#064e3b') {
        ctx.save();
        ctx.shadowColor = 'rgba(0,0,0,0.65)';
        ctx.shadowBlur = 16;
        ctx.shadowOffsetY = 8;

        const outerGrad = ctx.createRadialGradient(65, 55, 10, 90, 90, 72);
        outerGrad.addColorStop(0, '#fff9db');
        outerGrad.addColorStop(0.45, '#d4af37');
        outerGrad.addColorStop(1, '#5c3d03');
        ctx.fillStyle = outerGrad;
        ctx.beginPath();
        ctx.arc(90, 90, 68, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();

        const innerGrad = ctx.createRadialGradient(72, 68, 8, 90, 90, 56);
        innerGrad.addColorStop(0, rimColor);
        innerGrad.addColorStop(1, '#040b16');
        ctx.fillStyle = innerGrad;
        ctx.beginPath();
        ctx.arc(90, 90, 54, 0, Math.PI * 2);
        ctx.fill();

        const gloss = ctx.createLinearGradient(90, 36, 90, 85);
        gloss.addColorStop(0, 'rgba(255,255,255,0.42)');
        gloss.addColorStop(1, 'rgba(255,255,255,0)');
        ctx.fillStyle = gloss;
        ctx.beginPath();
        ctx.ellipse(90, 58, 36, 18, 0, 0, Math.PI * 2);
        ctx.fill();
    }

    if (iconType === 'crown') {
        draw3DBadgeBase('#7f1d1d');
        ctx.save();
        ctx.shadowColor = 'rgba(0,0,0,0.7)';
        ctx.shadowBlur = 8;
        ctx.shadowOffsetY = 4;
        ctx.fillStyle = gold3D;
        ctx.beginPath();
        ctx.moveTo(52, 112);
        ctx.lineTo(46, 72);
        ctx.lineTo(70, 90);
        ctx.lineTo(90, 60);
        ctx.lineTo(110, 90);
        ctx.lineTo(134, 72);
        ctx.lineTo(128, 112);
        ctx.closePath();
        ctx.fill();

        ctx.fillRect(52, 115, 76, 10);

        [['#ef4444', 90, 55], ['#10b981', 46, 68], ['#10b981', 134, 68]].forEach(([c, x, y]) => {
            ctx.fillStyle = c;
            ctx.beginPath();
            ctx.arc(x, y, 6, 0, Math.PI * 2);
            ctx.fill();
        });
        ctx.restore();
    } else if (iconType === 'calendar') {
        draw3DBadgeBase('#065f46');
        ctx.save();
        ctx.shadowColor = 'rgba(0,0,0,0.6)';
        ctx.shadowBlur = 8;
        ctx.shadowOffsetY = 5;

        ctx.fillStyle = '#fffdf7';
        ctx.beginPath();
        ctx.roundRect(56, 62, 68, 62, 12);
        ctx.fill();

        ctx.fillStyle = gold3D;
        ctx.beginPath();
        ctx.roundRect(56, 62, 68, 20, [12, 12, 0, 0]);
        ctx.fill();

        ctx.fillStyle = darkGold;
        ctx.fillRect(70, 54, 7, 14);
        ctx.fillRect(103, 54, 7, 14);

        ctx.fillStyle = '#b45309';
        for (let r = 0; r < 2; r++) {
            for (let c = 0; c < 3; c++) {
                ctx.beginPath();
                ctx.arc(72 + c * 18, 95 + r * 14, 4.5, 0, Math.PI * 2);
                ctx.fill();
            }
        }
        ctx.restore();
    } else if (iconType === 'clock') {
        draw3DBadgeBase('#1e3a8a');
        const faceGrad = ctx.createRadialGradient(84, 84, 5, 90, 90, 38);
        faceGrad.addColorStop(0, '#ffffff');
        faceGrad.addColorStop(0.85, '#fef3c7');
        faceGrad.addColorStop(1, '#d4af37');
        ctx.fillStyle = faceGrad;
        ctx.beginPath();
        ctx.arc(90, 92, 36, 0, Math.PI * 2);
        ctx.fill();
        ctx.lineWidth = 5;
        ctx.strokeStyle = gold3D;
        ctx.stroke();

        ctx.fillStyle = gold3D;
        ctx.fillRect(84, 46, 12, 9);

        ctx.strokeStyle = '#0f172a';
        ctx.lineWidth = 4;
        ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.moveTo(90, 92);
        ctx.lineTo(90, 70);
        ctx.moveTo(90, 92);
        ctx.lineTo(108, 98);
        ctx.stroke();

        ctx.fillStyle = '#dc2626';
        ctx.beginPath();
        ctx.arc(90, 92, 4.5, 0, Math.PI * 2);
        ctx.fill();
    } else if (iconType === 'location') {
        draw3DBadgeBase('#7f1d1d');
        ctx.save();
        ctx.shadowColor = 'rgba(0,0,0,0.75)';
        ctx.shadowBlur = 10;
        ctx.shadowOffsetY = 6;

        ctx.fillStyle = gold3D;
        ctx.beginPath();
        ctx.moveTo(90, 130);
        ctx.bezierCurveTo(62, 102, 56, 84, 56, 74);
        ctx.arc(90, 74, 34, Math.PI, 0, false);
        ctx.bezierCurveTo(124, 84, 118, 102, 90, 130);
        ctx.closePath();
        ctx.fill();

        const ruby = ctx.createRadialGradient(85, 70, 2, 90, 74, 15);
        ruby.addColorStop(0, '#fda4af');
        ruby.addColorStop(0.5, '#e11d48');
        ruby.addColorStop(1, '#4c0519');
        ctx.fillStyle = ruby;
        ctx.beginPath();
        ctx.arc(90, 74, 14, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
    } else if (iconType === 'crescent') {
        draw3DBadgeBase('#065f46');
        ctx.save();
        ctx.shadowColor = 'rgba(0,0,0,0.7)';
        ctx.shadowBlur = 8;
        ctx.shadowOffsetY = 5;
        ctx.fillStyle = gold3D;
        ctx.beginPath();
        ctx.arc(88, 92, 34, 0.35, Math.PI * 1.85, false);
        ctx.arc(102, 82, 27, Math.PI * 1.75, 0.5, true);
        ctx.closePath();
        ctx.fill();

        ctx.beginPath();
        for (let i = 0; i < 5; i++) {
            const outerAngle = (i * 72 - 90) * (Math.PI / 180);
            const innerAngle = ((i * 72 + 36) - 90) * (Math.PI / 180);
            ctx.lineTo(114 + Math.cos(outerAngle) * 12, 66 + Math.sin(outerAngle) * 12);
            ctx.lineTo(114 + Math.cos(innerAngle) * 5, 66 + Math.sin(innerAngle) * 5);
        }
        ctx.closePath();
        ctx.fill();
        ctx.restore();
    } else if (iconType === 'rings') {
        draw3DBadgeBase('#1e3a8a');
        ctx.save();
        ctx.lineWidth = 7;
        ctx.strokeStyle = gold3D;
        ctx.shadowColor = 'rgba(0,0,0,0.65)';
        ctx.shadowBlur = 6;

        ctx.beginPath();
        ctx.arc(76, 98, 22, 0, Math.PI * 2);
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(104, 98, 22, 0, Math.PI * 2);
        ctx.stroke();

        ctx.fillStyle = '#e0f2fe';
        ctx.beginPath();
        ctx.moveTo(104, 54);
        ctx.lineTo(116, 66);
        ctx.lineTo(104, 76);
        ctx.lineTo(92, 66);
        ctx.closePath();
        ctx.fill();
        ctx.restore();
    } else if (iconType === 'floral') {
        draw3DBadgeBase('#14532d');
        for (let i = 0; i < 6; i++) {
            const a = (i * Math.PI * 2) / 6;
            const px = 90 + Math.cos(a) * 20;
            const py = 90 + Math.sin(a) * 20;
            ctx.fillStyle = i % 2 === 0 ? '#fbbf24' : '#f59e0b';
            ctx.beginPath();
            ctx.arc(px, py, 14, 0, Math.PI * 2);
            ctx.fill();
        }
        ctx.fillStyle = '#fef08a';
        ctx.beginPath();
        ctx.arc(90, 90, 11, 0, Math.PI * 2);
        ctx.fill();
    } else if (iconType === 'music') {
        draw3DBadgeBase('#3b0764');
        ctx.fillStyle = gold3D;
        ctx.beginPath();
        ctx.arc(76, 110, 12, 0, Math.PI * 2);
        ctx.arc(110, 104, 12, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillRect(83, 62, 6, 48);
        ctx.fillRect(117, 56, 6, 48);
        ctx.fillRect(83, 56, 40, 10);
    } else if (iconType === 'arrowUp') {
        draw3DBadgeBase('#4c1d95');
        ctx.strokeStyle = gold3D;
        ctx.lineWidth = 8;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.beginPath();
        ctx.moveTo(66, 98);
        ctx.lineTo(90, 72);
        ctx.lineTo(114, 98);
        ctx.moveTo(90, 74);
        ctx.lineTo(90, 118);
        ctx.stroke();
    }

    return canvas.toDataURL('image/png');
}

/* --------------------------------------------------------------------------
   3. PROCEDURAL 3D SCULPTED COUPLE & 3D BACKGROUND PROPS GENERATOR
   -------------------------------------------------------------------------- */
function generate3DPngDataUrl(type) {
    const canvas = document.createElement('canvas');
    canvas.width = 440;
    canvas.height = 440;
    const ctx = canvas.getContext('2d');

    if (type === 'royalCouple3D') {
        const goldGrad = ctx.createLinearGradient(60, 40, 380, 400);
        goldGrad.addColorStop(0, '#fff9db');
        goldGrad.addColorStop(0.5, '#d4af37');
        goldGrad.addColorStop(1, '#785206');

        // 1. 3D Glowing Golden Stage Pedestal Base
        ctx.save();
        ctx.shadowColor = 'rgba(0, 0, 0, 0.85)';
        ctx.shadowBlur = 24;
        ctx.shadowOffsetY = 14;
        ctx.fillStyle = goldGrad;
        ctx.beginPath();
        ctx.ellipse(220, 382, 155, 28, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();

        const stageTop = ctx.createRadialGradient(220, 372, 20, 220, 375, 148);
        stageTop.addColorStop(0, '#065f46');
        stageTop.addColorStop(0.75, '#022c22');
        stageTop.addColorStop(1, '#d4af37');
        ctx.fillStyle = stageTop;
        ctx.beginPath();
        ctx.ellipse(220, 374, 146, 22, 0, 0, Math.PI * 2);
        ctx.fill();

        // 2. 3D Filigree Arch Halo Behind Couple
        ctx.save();
        ctx.strokeStyle = goldGrad;
        ctx.lineWidth = 5;
        ctx.beginPath();
        ctx.arc(220, 215, 148, Math.PI * 0.92, Math.PI * 0.08, false);
        ctx.stroke();
        ctx.restore();

        // 3. 3D GROOM (LEFT)
        ctx.save();
        ctx.shadowColor = 'rgba(0,0,0,0.65)';
        ctx.shadowBlur = 18;
        ctx.shadowOffsetX = -6;
        ctx.shadowOffsetY = 8;

        const sherwaniGrad = ctx.createRadialGradient(135, 230, 15, 150, 270, 115);
        sherwaniGrad.addColorStop(0, '#334155');
        sherwaniGrad.addColorStop(0.45, '#0f172a');
        sherwaniGrad.addColorStop(1, '#020617');
        ctx.fillStyle = sherwaniGrad;
        ctx.beginPath();
        ctx.moveTo(92, 372);
        ctx.quadraticCurveTo(96, 210, 122, 198);
        ctx.quadraticCurveTo(155, 188, 188, 198);
        ctx.quadraticCurveTo(210, 210, 214, 372);
        ctx.closePath();
        ctx.fill();
        ctx.lineWidth = 3.5;
        ctx.strokeStyle = goldGrad;
        ctx.stroke();

        const shawlGrad = ctx.createLinearGradient(95, 200, 205, 310);
        shawlGrad.addColorStop(0, '#f43f5e');
        shawlGrad.addColorStop(0.5, '#9f1239');
        shawlGrad.addColorStop(1, '#4c0519');
        ctx.fillStyle = shawlGrad;
        ctx.beginPath();
        ctx.moveTo(106, 206);
        ctx.quadraticCurveTo(148, 265, 205, 240);
        ctx.lineTo(208, 272);
        ctx.quadraticCurveTo(140, 298, 98, 235);
        ctx.closePath();
        ctx.fill();
        ctx.strokeStyle = goldGrad;
        ctx.lineWidth = 2.5;
        ctx.stroke();

        for (let b = 212; b <= 345; b += 22) {
            ctx.fillStyle = '#fff6c2';
            ctx.beginPath();
            ctx.arc(154, b, 4.2, 0, Math.PI * 2);
            ctx.fill();
        }

        ctx.fillStyle = '#dba982';
        ctx.beginPath();
        ctx.roundRect(140, 172, 28, 28, 10);
        ctx.fill();

        const groomSkin = ctx.createRadialGradient(144, 136, 6, 154, 145, 42);
        groomSkin.addColorStop(0, '#ffe4cc');
        groomSkin.addColorStop(0.65, '#eabba0');
        groomSkin.addColorStop(1, '#b87d5b');
        ctx.fillStyle = groomSkin;
        ctx.beginPath();
        ctx.arc(154, 145, 36, 0, Math.PI * 2);
        ctx.fill();

        const beardGrad = ctx.createLinearGradient(120, 145, 188, 182);
        beardGrad.addColorStop(0, '#1e293b');
        beardGrad.addColorStop(1, '#090d16');
        ctx.fillStyle = beardGrad;
        ctx.beginPath();
        ctx.moveTo(120, 148);
        ctx.quadraticCurveTo(154, 178, 188, 148);
        ctx.quadraticCurveTo(184, 182, 154, 184);
        ctx.quadraticCurveTo(124, 182, 120, 148);
        ctx.closePath();
        ctx.fill();

        ctx.fillStyle = '#0f172a';
        ctx.beginPath();
        ctx.arc(141, 140, 3.8, 0, Math.PI * 2);
        ctx.arc(167, 140, 3.8, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        ctx.arc(142.2, 138.8, 1.3, 0, Math.PI * 2);
        ctx.arc(168.2, 138.8, 1.3, 0, Math.PI * 2);
        ctx.fill();

        const turbanGrad = ctx.createRadialGradient(142, 95, 10, 154, 110, 52);
        turbanGrad.addColorStop(0, '#fffbeb');
        turbanGrad.addColorStop(0.55, '#fcd34d');
        turbanGrad.addColorStop(1, '#92400e');
        ctx.fillStyle = turbanGrad;
        ctx.beginPath();
        ctx.moveTo(114, 132);
        ctx.quadraticCurveTo(110, 82, 154, 84);
        ctx.quadraticCurveTo(198, 82, 194, 132);
        ctx.quadraticCurveTo(154, 116, 114, 132);
        ctx.closePath();
        ctx.fill();

        ctx.fillStyle = '#e11d48';
        ctx.beginPath();
        ctx.arc(154, 98, 8, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = '#fff6c2';
        ctx.lineWidth = 2.5;
        ctx.stroke();
        ctx.restore();

        // 4. 3D BRIDE (RIGHT)
        ctx.save();
        ctx.shadowColor = 'rgba(0,0,0,0.68)';
        ctx.shadowBlur = 18;
        ctx.shadowOffsetX = 6;
        ctx.shadowOffsetY = 8;

        const veilGrad = ctx.createRadialGradient(286, 160, 20, 286, 240, 150);
        veilGrad.addColorStop(0, 'rgba(225, 29, 72, 0.92)');
        veilGrad.addColorStop(0.7, 'rgba(136, 19, 55, 0.85)');
        veilGrad.addColorStop(1, 'rgba(76, 5, 25, 0.9)');
        ctx.fillStyle = veilGrad;
        ctx.beginPath();
        ctx.moveTo(235, 115);
        ctx.quadraticCurveTo(286, 85, 338, 120);
        ctx.lineTo(356, 372);
        ctx.lineTo(218, 372);
        ctx.closePath();
        ctx.fill();
        ctx.strokeStyle = goldGrad;
        ctx.lineWidth = 4;
        ctx.stroke();

        const lehengaGrad = ctx.createRadialGradient(275, 260, 15, 286, 290, 120);
        lehengaGrad.addColorStop(0, '#f43f5e');
        lehengaGrad.addColorStop(0.45, '#be123c');
        lehengaGrad.addColorStop(1, '#4c0519');
        ctx.fillStyle = lehengaGrad;
        ctx.beginPath();
        ctx.moveTo(212, 372);
        ctx.quadraticCurveTo(232, 225, 258, 210);
        ctx.quadraticCurveTo(286, 202, 314, 210);
        ctx.quadraticCurveTo(340, 225, 358, 372);
        ctx.closePath();
        ctx.fill();
        ctx.strokeStyle = goldGrad;
        ctx.lineWidth = 3.5;
        ctx.stroke();

        ctx.fillStyle = goldGrad;
        ctx.beginPath();
        ctx.roundRect(214, 352, 142, 18, 8);
        ctx.fill();

        ctx.fillStyle = '#e5b895';
        ctx.beginPath();
        ctx.roundRect(274, 182, 24, 24, 8);
        ctx.fill();

        ctx.strokeStyle = goldGrad;
        ctx.lineWidth = 6;
        ctx.beginPath();
        ctx.arc(286, 198, 22, 0.2, Math.PI - 0.2);
        ctx.stroke();

        const brideSkin = ctx.createRadialGradient(278, 148, 6, 286, 156, 38);
        brideSkin.addColorStop(0, '#fff0e5');
        brideSkin.addColorStop(0.6, '#f5cba7');
        brideSkin.addColorStop(1, '#c68b65');
        ctx.fillStyle = brideSkin;
        ctx.beginPath();
        ctx.arc(286, 156, 33, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = 'rgba(244, 63, 94, 0.28)';
        ctx.beginPath();
        ctx.arc(268, 162, 8, 0, Math.PI * 2);
        ctx.arc(304, 162, 8, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = '#0f172a';
        ctx.beginPath();
        ctx.arc(286, 146, 34, Math.PI * 1.08, Math.PI * 1.92);
        ctx.fill();

        ctx.fillStyle = '#ffe082';
        ctx.beginPath();
        ctx.arc(286, 128, 6.5, 0, Math.PI * 2);
        ctx.arc(266, 125, 7.5, 0, Math.PI * 2);
        ctx.fill();

        ctx.strokeStyle = '#ffe082';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(274, 163, 7.5, 0, Math.PI * 1.6);
        ctx.stroke();

        ctx.fillStyle = '#0f172a';
        ctx.beginPath();
        ctx.arc(274, 152, 3.6, 0, Math.PI * 2);
        ctx.arc(298, 152, 3.6, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        ctx.arc(275.2, 150.8, 1.3, 0, Math.PI * 2);
        ctx.arc(299.2, 150.8, 1.3, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = '#be123c';
        ctx.beginPath();
        ctx.ellipse(286, 170, 6.5, 3.2, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();

        // 5. 3D VOLUMETRIC GLOSSY RUBY HEART FLOATING ABOVE COUPLE
        ctx.save();
        ctx.translate(220, 62);
        ctx.shadowColor = 'rgba(225, 29, 72, 0.75)';
        ctx.shadowBlur = 18;
        const heartGrad = ctx.createRadialGradient(-8, -8, 3, 0, 0, 32);
        heartGrad.addColorStop(0, '#fda4af');
        heartGrad.addColorStop(0.45, '#e11d48');
        heartGrad.addColorStop(1, '#881337');
        ctx.fillStyle = heartGrad;
        ctx.beginPath();
        ctx.moveTo(0, 12);
        ctx.bezierCurveTo(-26, -12, -14, -28, 0, -10);
        ctx.bezierCurveTo(14, -28, 26, -12, 0, 12);
        ctx.closePath();
        ctx.fill();
        ctx.restore();

        return canvas.toDataURL('image/png');
    }

    canvas.width = 380;
    canvas.height = 380;

    if (type === 'lantern') {
        const glow = ctx.createRadialGradient(190, 200, 10, 190, 200, 155);
        glow.addColorStop(0, 'rgba(255, 240, 150, 0.95)');
        glow.addColorStop(0.5, 'rgba(245, 158, 11, 0.35)');
        glow.addColorStop(1, 'rgba(245, 158, 11, 0)');
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(190, 200, 155, 0, Math.PI * 2);
        ctx.fill();

        const goldGrad = ctx.createLinearGradient(115, 60, 265, 320);
        goldGrad.addColorStop(0, '#fff6c2');
        goldGrad.addColorStop(0.5, '#d4af37');
        goldGrad.addColorStop(1, '#785206');

        ctx.strokeStyle = goldGrad;
        ctx.lineWidth = 4;
        ctx.beginPath();
        ctx.moveTo(190, 0);
        ctx.lineTo(190, 68);
        ctx.stroke();

        ctx.fillStyle = goldGrad;
        ctx.beginPath();
        ctx.moveTo(130, 120);
        ctx.quadraticCurveTo(190, 48, 250, 120);
        ctx.closePath();
        ctx.fill();

        ctx.strokeStyle = goldGrad;
        ctx.lineWidth = 6;
        ctx.beginPath();
        ctx.moveTo(135, 120);
        ctx.lineTo(120, 250);
        ctx.lineTo(155, 302);
        ctx.lineTo(225, 302);
        ctx.lineTo(260, 250);
        ctx.lineTo(245, 120);
        ctx.closePath();
        ctx.stroke();

        ctx.lineWidth = 2.5;
        ctx.beginPath();
        ctx.moveTo(190, 120);
        ctx.lineTo(190, 302);
        ctx.stroke();

        ctx.fillStyle = goldGrad;
        ctx.beginPath();
        ctx.arc(190, 320, 11, 0, Math.PI * 2);
        ctx.fill();
    } else if (type === 'whiteGoldRose' || type === 'crimsonRose') {
        const isCrimson = type === 'crimsonRose';
        const leafGrad = ctx.createLinearGradient(60, 60, 320, 320);
        leafGrad.addColorStop(0, '#fff3b0');
        leafGrad.addColorStop(1, '#9a6f0b');
        ctx.fillStyle = leafGrad;
        for (let l = 0; l < 4; l++) {
            ctx.save();
            ctx.translate(190, 190);
            ctx.rotate((l * Math.PI) / 2 + 0.4);
            ctx.beginPath();
            ctx.ellipse(95, 0, 42, 18, 0, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();
        }

        for (let layer = 5; layer >= 1; layer--) {
            const petals = layer * 3 + 3;
            const radius = layer * 24;
            for (let i = 0; i < petals; i++) {
                const angle = (i * Math.PI * 2) / petals + layer * 0.45;
                const px = 190 + Math.cos(angle) * (radius * 0.48);
                const py = 190 + Math.sin(angle) * (radius * 0.48);

                const g = ctx.createRadialGradient(px - 8, py - 8, 4, px, py, radius * 0.55);
                if (isCrimson) {
                    g.addColorStop(0, '#fda4af');
                    g.addColorStop(0.45, '#e11d48');
                    g.addColorStop(1, '#4c0519');
                } else {
                    g.addColorStop(0, '#ffffff');
                    g.addColorStop(0.6, '#fef3c7');
                    g.addColorStop(1, '#d4af37');
                }
                ctx.fillStyle = g;
                ctx.beginPath();
                ctx.arc(px, py, radius * 0.46, 0, Math.PI * 2);
                ctx.fill();
            }
        }
    } else if (type === 'dholak') {
        const bodyGrad = ctx.createLinearGradient(80, 110, 290, 260);
        bodyGrad.addColorStop(0, '#b45309');
        bodyGrad.addColorStop(0.5, '#f59e0b');
        bodyGrad.addColorStop(1, '#78350f');

        ctx.fillStyle = bodyGrad;
        ctx.beginPath();
        ctx.ellipse(190, 190, 118, 74, -0.15, 0, Math.PI * 2);
        ctx.fill();
        ctx.lineWidth = 5;
        ctx.strokeStyle = '#fde047';
        ctx.stroke();

        ctx.strokeStyle = '#fef08a';
        ctx.lineWidth = 3;
        for (let x = -80; x <= 80; x += 26) {
            ctx.beginPath();
            ctx.moveTo(190 + x, 122);
            ctx.lineTo(190 + x + 15, 255);
            ctx.stroke();
        }

        ctx.fillStyle = '#fef3c7';
        ctx.beginPath();
        ctx.ellipse(292, 174, 24, 58, -0.15, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = '#10b981';
        ctx.lineWidth = 6;
        ctx.stroke();
    } else if (type === 'mehndiThali') {
        const plateGrad = ctx.createRadialGradient(190, 190, 20, 190, 190, 140);
        plateGrad.addColorStop(0, '#fef08a');
        plateGrad.addColorStop(0.6, '#d4af37');
        plateGrad.addColorStop(1, '#78350f');

        ctx.fillStyle = plateGrad;
        ctx.beginPath();
        ctx.arc(190, 195, 128, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = '#065f46';
        ctx.beginPath();
        ctx.arc(190, 195, 36, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = '#fde047';
        ctx.lineWidth = 4;
        ctx.stroke();

        for (let i = 0; i < 6; i++) {
            const ang = (i * Math.PI * 2) / 6;
            const dx = 190 + Math.cos(ang) * 86;
            const dy = 195 + Math.sin(ang) * 86;

            ctx.fillStyle = '#b91c1c';
            ctx.beginPath();
            ctx.arc(dx, dy, 16, 0, Math.PI * 2);
            ctx.fill();

            ctx.fillStyle = '#fef08a';
            ctx.beginPath();
            ctx.arc(dx, dy - 12, 8, 0, Math.PI * 2);
            ctx.fill();
        }
    } else if (type === 'marigoldFlower') {
        for (let r = 82; r > 15; r -= 16) {
            const count = 14;
            for (let i = 0; i < count; i++) {
                const a = (i * Math.PI * 2) / count + r;
                const x = 190 + Math.cos(a) * (r * 0.7);
                const y = 190 + Math.sin(a) * (r * 0.7);
                ctx.fillStyle = r % 32 === 0 ? '#f59e0b' : '#fde047';
                ctx.beginPath();
                ctx.arc(x, y, 22, 0, Math.PI * 2);
                ctx.fill();
            }
        }
    } else if (type === 'royalSehra') {
        const turbGrad = ctx.createRadialGradient(190, 185, 20, 190, 185, 130);
        turbGrad.addColorStop(0, '#ffe082');
        turbGrad.addColorStop(0.6, '#b91c1c');
        turbGrad.addColorStop(1, '#450a0a');
        ctx.fillStyle = turbGrad;
        ctx.beginPath();
        ctx.arc(190, 195, 96, Math.PI, 0, false);
        ctx.closePath();
        ctx.fill();
        ctx.lineWidth = 5;
        ctx.strokeStyle = '#ffd54f';
        ctx.stroke();

        ctx.fillStyle = '#ffe082';
        ctx.beginPath();
        ctx.ellipse(190, 96, 22, 48, 0.2, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = '#fffbeb';
        for (let x = 115; x <= 265; x += 18) {
            for (let y = 200; y <= 300; y += 16) {
                ctx.beginPath();
                ctx.arc(x, y, 5, 0, Math.PI * 2);
                ctx.fill();
            }
        }
    } else if (type === 'royalChandelier') {
        ctx.strokeStyle = '#ffe082';
        ctx.lineWidth = 4;
        ctx.beginPath();
        ctx.moveTo(190, 0);
        ctx.lineTo(190, 95);
        ctx.stroke();

        for (let tier = 1; tier <= 3; tier++) {
            const w = tier * 42;
            const y = 75 + tier * 52;
            ctx.strokeStyle = '#ffd54f';
            ctx.beginPath();
            ctx.ellipse(190, y, w, 18, 0, 0, Math.PI * 2);
            ctx.stroke();

            ctx.fillStyle = '#fef9c3';
            for (let c = -w; c <= w; c += 22) {
                ctx.beginPath();
                ctx.arc(190 + c, y + 18, 5, 0, Math.PI * 2);
                ctx.fill();
            }
        }
    } else if (type === 'crescentMoon') {
        const moonGrad = ctx.createLinearGradient(80, 60, 270, 290);
        moonGrad.addColorStop(0, '#fffbeb');
        moonGrad.addColorStop(0.5, '#ffe082');
        moonGrad.addColorStop(1, '#b45309');

        ctx.fillStyle = moonGrad;
        ctx.beginPath();
        ctx.arc(190, 190, 112, 0.4, Math.PI * 1.85, false);
        ctx.arc(228, 165, 94, Math.PI * 1.75, 0.55, true);
        ctx.closePath();
        ctx.fill();
    } else if (type === 'pearlOrchid') {
        for (let i = 0; i < 7; i++) {
            const a = (i * Math.PI * 2) / 7;
            const x = 190 + Math.cos(a) * 48;
            const y = 190 + Math.sin(a) * 48;
            const pg = ctx.createRadialGradient(x - 6, y - 6, 4, x, y, 36);
            pg.addColorStop(0, '#ffffff');
            pg.addColorStop(0.6, '#e0f2fe');
            pg.addColorStop(1, '#60a5fa');
            ctx.fillStyle = pg;
            ctx.beginPath();
            ctx.arc(x, y, 34, 0, Math.PI * 2);
            ctx.fill();
        }
        const centerPearl = ctx.createRadialGradient(184, 184, 3, 190, 190, 30);
        centerPearl.addColorStop(0, '#ffffff');
        centerPearl.addColorStop(1, '#fde047');
        ctx.fillStyle = centerPearl;
        ctx.beginPath();
        ctx.arc(190, 190, 28, 0, Math.PI * 2);
        ctx.fill();
    }

    return canvas.toDataURL('image/png');
}

/* --------------------------------------------------------------------------
   4. DOM INITIALIZATION, 3D BOX TILT, SCROLL OBSERVER & PARALLAX
   -------------------------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
    const isMobileView = () => window.innerWidth <= 768;

    // 1. Render all 3D Volumetric Icons
    const iconElements = document.querySelectorAll('.icon-3d-img');
    const iconCache = {};
    iconElements.forEach(img => {
        const iconType = img.getAttribute('data-icon-3d') || 'crown';
        if (!iconCache[iconType]) {
            iconCache[iconType] = generate3DIconDataUrl(iconType);
        }
        img.src = iconCache[iconType];
    });

    // 2. Render all 3D PNG Cutout Props & 3D Sculpted Couple Portraits
    const propElements = document.querySelectorAll('.png-3d-prop, .couple-3d-hero-img');
    const pngCache = {};
    propElements.forEach(img => {
        const type = img.getAttribute('data-png-type') || 'lantern';
        if (!pngCache[type]) {
            pngCache[type] = generate3DPngDataUrl(type);
        }
        img.src = pngCache[type];
    });

    // 3. Interactive 3D Tilt for Starting 3D Jewel Box Pop-Up
    const royalGate = document.getElementById('royal-gate');
    const royalBox = document.getElementById('royal-3d-box');
    const enterBtn = document.getElementById('enter-journey-btn');
    const musicWidget = document.getElementById('music-widget');

    if (royalGate && royalBox) {
        royalGate.addEventListener('mousemove', (e) => {
            if (isMobileView()) return;
            const rect = royalBox.getBoundingClientRect();
            const cx = rect.left + rect.width / 2;
            const cy = rect.top + rect.height / 2;
            const dx = (e.clientX - cx) / (rect.width / 2);
            const dy = (e.clientY - cy) / (rect.height / 2);

            const tiltX = (-dy * 10).toFixed(2);
            const tiltY = (dx * 10).toFixed(2);
            royalBox.style.setProperty('--boxTiltX', `${tiltX}deg`);
            royalBox.style.setProperty('--boxTiltY', `${tiltY}deg`);
        });
    }

    function dismissGateAndPlay() {
        if (royalGate && !royalGate.classList.contains('gate-opened')) {
            royalGate.classList.add('gate-opened');
        }
        startOrUnmuteMusic();
    }

    if (enterBtn) {
        enterBtn.addEventListener('click', dismissGateAndPlay);
    }

    ['scroll', 'wheel', 'touchstart', 'keydown'].forEach(evt => {
        window.addEventListener(evt, () => {
            startOrUnmuteMusic();
        }, { once: true, passive: true });
    });

    if (musicWidget) {
        musicWidget.addEventListener('click', () => {
            if (!ytPlayer || typeof ytPlayer.getPlayerState !== 'function') return;
            if (isMusicPlaying) {
                ytPlayer.pauseVideo();
            } else {
                ytPlayer.unMute();
                ytPlayer.playVideo();
            }
        });
    }

    // 4. IntersectionObserver for Scroll Reveal Animations
    const revealItems = document.querySelectorAll('.reveal-item');
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
            } else {
                entry.target.classList.remove('in-view');
            }
        });
    }, { threshold: 0.14 });

    revealItems.forEach(item => revealObserver.observe(item));

    // 5. Scene Theme Switcher & Side Progress Navigation
    const scenes = document.querySelectorAll('.wedding-scene');
    const navNodes = document.querySelectorAll('.nav-node');
    const progressFill = document.getElementById('scroll-progress-fill');

    const sceneObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const index = parseInt(entry.target.getAttribute('data-scene-index'), 10) || 0;
                document.body.className = `scene-theme-${index}`;

                navNodes.forEach((node, idx) => {
                    node.classList.toggle('active', idx === index);
                });

                updateAmbientPalette(index);
            }
        });
    }, { threshold: 0.35 });

    scenes.forEach(scene => sceneObserver.observe(scene));

    // 6. Smooth 3D Parallax on Desktop & Scroll Progress Bar
    let mouseX = 0;
    let mouseY = 0;
    const parallaxProps = document.querySelectorAll('.png-3d-prop');

    window.addEventListener('mousemove', (e) => {
        if (isMobileView()) return;
        mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
        mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
        applyPropParallax();
    }, { passive: true });

    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
        if (progressFill) {
            progressFill.style.height = `${Math.min(100, Math.max(0, progress))}%`;
        }
    }, { passive: true });

    function applyPropParallax() {
        parallaxProps.forEach(prop => {
            const depth = parseFloat(prop.getAttribute('data-depth')) || 0.15;
            const px = (mouseX * 45 * depth).toFixed(1);
            const py = (mouseY * 35 * depth).toFixed(1);
            prop.style.setProperty('--px', `${px}px`);
            prop.style.setProperty('--py', `${py}px`);
        });
    }

    // 7. Live Countdown Timer to 1st March 2030, 8:00 PM
    const weddingTarget = new Date('2030-03-01T20:00:00').getTime();
    const daysEl = document.getElementById('cd-days');
    const hoursEl = document.getElementById('cd-hours');
    const minsEl = document.getElementById('cd-mins');
    const secsEl = document.getElementById('cd-secs');

    function updateCountdown() {
        const now = Date.now();
        const diff = Math.max(0, weddingTarget - now);

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const mins = Math.floor((diff / 1000 / 60) % 60);
        const secs = Math.floor((diff / 1000) % 60);

        if (daysEl) daysEl.textContent = String(days).padStart(3, '0');
        if (hoursEl) hoursEl.textContent = String(hours).padStart(2, '0');
        if (minsEl) minsEl.textContent = String(mins).padStart(2, '0');
        if (secsEl) secsEl.textContent = String(secs).padStart(2, '0');
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);

    /* ----------------------------------------------------------------------
       5. 3D AMBIENT BACKGROUND CANVAS (FLOATING PETALS & GOLDEN SPARKLES)
       ---------------------------------------------------------------------- */
    const canvas = document.getElementById('ambient-canvas');
    const ctx = canvas.getContext('2d');
    let width, height;

    const scenePalettes = [
        ['#ffe082', '#d4af37', '#34d399', '#ffffff'],
        ['#fde047', '#f59e0b', '#10b981', '#fb923c'],
        ['#ffe082', '#f43f5e', '#fb7185', '#d4af37'],
        ['#bae6fd', '#ffe082', '#ffffff', '#93c5fd'],
        ['#e9d5ff', '#ffe082', '#f472b6', '#d4af37']
    ];
    let currentPalette = scenePalettes[0];

    function updateAmbientPalette(index) {
        currentPalette = scenePalettes[index] || scenePalettes[0];
        petals.forEach(p => {
            p.color = currentPalette[Math.floor(Math.random() * currentPalette.length)];
        });
    }

    function resizeCanvas() {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    }

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    class FloatingPetal3D {
        constructor() {
            this.reset(true);
        }
        reset(initial = false) {
            this.x = Math.random() * width;
            this.y = initial ? Math.random() * height : -30;
            this.z = Math.random() * 0.8 + 0.3;
            this.size = (Math.random() * 7 + 4) * this.z;
            this.speedY = (Math.random() * 0.8 + 0.35) * this.z;
            this.speedX = (Math.random() - 0.5) * 0.6;
            this.angle = Math.random() * Math.PI * 2;
            this.spin = (Math.random() - 0.5) * 0.02;
            this.color = currentPalette[Math.floor(Math.random() * currentPalette.length)];
        }
        update() {
            this.y += this.speedY;
            this.x += this.speedX + Math.sin(this.angle) * 0.35;
            this.angle += this.spin;

            if (this.y > height + 30) {
                this.reset(false);
            }
        }
        draw() {
            ctx.save();
            ctx.translate(this.x, this.y);
            ctx.rotate(this.angle);
            ctx.globalAlpha = 0.65 * this.z;
            ctx.fillStyle = this.color;
            ctx.shadowBlur = 10;
            ctx.shadowColor = this.color;

            ctx.beginPath();
            ctx.moveTo(0, -this.size);
            ctx.bezierCurveTo(this.size, -this.size * 0.5, this.size, this.size * 0.8, 0, this.size);
            ctx.bezierCurveTo(-this.size, this.size * 0.8, -this.size, -this.size * 0.5, 0, -this.size);
            ctx.fill();
            ctx.restore();
        }
    }

    const petalCount = isMobileView() ? 32 : 55;
    const petals = Array.from({ length: petalCount }, () => new FloatingPetal3D());

    function animateAmbient() {
        ctx.clearRect(0, 0, width, height);
        petals.forEach(p => {
            p.update();
            p.draw();
        });
        requestAnimationFrame(animateAmbient);
    }

    animateAmbient();
});