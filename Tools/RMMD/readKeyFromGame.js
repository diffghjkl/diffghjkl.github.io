/**
 * Author: Peter Dragicevic [peter@petschko.org]
 * Authors-Website: https://petschko.org/
 * Date: 17.11.2019
 * Time: 15:29
 */

/* Paste this Code at the VERY END of "rpg_core.js" then start the game to retrieve the key */
/* Remove this function when you want to play this game again ;) - It was just to show the decryption-key*/
Decrypter.decryptArrayBuffer = function(arrayBuffer) {
	if (!arrayBuffer) return null;
	var header = new Uint8Array(arrayBuffer, 0, this._headerlength);

	var i;
	var ref = this.SIGNATURE + this.VER + this.REMAIN;
	var refBytes = new Uint8Array(16);
	for (i = 0; i < this._headerlength; i++) {
		refBytes[i] = parseInt("0x" + ref.substr(i * 2, 2), 16);
	}
	for (i = 0; i < this._headerlength; i++) {
		if (header[i] !== refBytes[i]) {
			throw new Error("Header 错误！");
		}
	}

	arrayBuffer = this.cutArrayHeader(arrayBuffer, Decrypter._headerlength);
	var view = new DataView(arrayBuffer);
	this.readEncryptionkey();
	var outputKey = "";
	for(i = 0; i < this._headerlength; i++) {
		outputKey += Decrypter._encryptionKey[i];
	}
	window.prompt("加密密钥:\n" + outputKey + "\n\n" + "当您想再次游玩时，请删除 rpg_core.js 末尾的函数！ =)\n\n复制代码：CTRL+C", outputKey)
	Decrypter.decryptArrayBuffer = function() {
		// Added this to let the game stop forcefully
	};
};
