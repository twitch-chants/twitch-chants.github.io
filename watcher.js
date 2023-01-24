'use strict';
(() => {
	
	console.warn(`[Twitch-Chants] Loading`);
	
	function checkExistance(attempts) {
		console.warn ("we here");
		if (window) {
			console.warn(`[Twitch-Chants] Found window`);
			console.warn(`[Twitch-Chants] ${window.FrankerFaceZ}`);
			console.warn(`[Twitch-Chants] ${window.ffz}`);
		}
		if (window.FrankerFaceZ) {
			console.warn(`[Twitch-Chants] Found FrankerFaceZ`);
		} else if (window.ffz) {
			console.warn(`[Twitch-Chants] Found ffz`);
		} else {
			const newAttempts = (attempts || 0) + 1;
			if (newAttempts < 60)
				return setTimeout(checkExistance.bind(this, newAttempts), 1000);
			console.warn(`[Twitch-Chants] Could not find FFZ. Injection unsuccessful. (Host: ${window.location.host})`);
		}
	}


	if (/^(?:player|im|chatdepot|tmi|api|spade|api-akamai|dev|)\./.test(window.location.hostname)) {
		console.warn(`[Twitch-Chants] Caught`);
		return;
	}
	setTimeout(checkExistance, 1000);
})();