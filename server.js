'use strict';

// ���W���[��
const express = require( 'express' );
const http = require( 'http' );
const socketIO = require( 'socket.io' );

// �I�u�W�F�N�g
const app = express();
const server = http.Server( app );
const io = socketIO( server );

// �萔
const PORT = process.env.PORT || 1337;

// �ڑ����̏���
// �E�T�[�o�[�ƃN���C�A���g�̐ڑ����m������ƁA
// �@�T�[�o�[���ŁA'connection'�C�x���g
// �@�N���C�A���g���ŁA'connect'�C�x���g����������
io.on(
    'connection',
    ( socket ) =>
    {
        console.log( 'connection' );

        // �ؒf���̏���
        // �E�N���C�A���g���ؒf������A�T�[�o�[���ł�'disconnect'�C�x���g����������
        socket.on(
            'disconnect',
            () =>
            {
                console.log( 'disconnect' );
            } );

        // �V�������b�Z�[�W��M���̏���
        // �E�N���C�A���g���̃��b�Z�[�W���M���́usocket.emit( 'new message', $( '#input_message' ).val() );�v�ɑ΂��鏈��
        socket.on(
            'new message',
            ( strMessage ) =>
            {
                console.log( 'new message', strMessage );
                // ���M���܂ޑS���ɑ��M
                io.emit( 'spread message', strMessage );

            } );

    } );


// ���J�t�H���_�̎w��
app.use( express.static( __dirname + '/public' ) );


// �T�[�o�[�̋N��
server.listen(
    PORT,
    () =>
    {
        console.log( 'Server on port %d', PORT );
    } );
