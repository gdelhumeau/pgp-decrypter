$(document).ready(function () {
    'use strict';

    $('#decrypt').click(function(e) {
        e.preventDefault();

        (async () => {
        
            var privateKey = await openpgp.readPrivateKey({ armoredKey: privateKey = $('#key').val() });

            var message = await openpgp.readMessage({
                armoredMessage: $('#content').val()
            });

            var { data: decrypted, signatures } = await openpgp.decrypt({
                message,
                decryptionKeys: privateKey
            });
            
            $('#decrypted-box').removeClass('d-none');
            $('#decrypted').val(decrypted);
        })();


    });

});