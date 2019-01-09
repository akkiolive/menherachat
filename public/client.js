// �N���C�A���g����T�[�o�[�ւ̐ڑ��v��
const socket = io.connect();

// �ڑ����̏���
// �E�T�[�o�[�ƃN���C�A���g�̐ڑ����m������ƁA
// �@�T�[�o�[���ŁA'connection'�C�x���g
// �@�N���C�A���g���ŁA'connect'�C�x���g����������
socket.on(
    'connect',
    () =>
    {
        console.log( 'connect' );
    } );

// �uSend�v�{�^�����������Ƃ��̏���
$( 'form' ).submit(
    () =>
    {
        console.log( '#input_message :', $( '#input_message' ).val() );

        if( $( '#input_message' ).val() )
        {
            // �T�[�o�[�ɁA�C�x���g��'new message' �œ��̓e�L�X�g�𑗐M
            socket.emit( 'new message', $( '#input_message' ).val() );

            $( '#input_message' ).val( '' );    // �e�L�X�g�{�b�N�X����ɁB
        }
        return false;   // �t�H�[�����M�͂��Ȃ�
    } );

// �T�[�o�[����̃��b�Z�[�W�g�U�ɑ΂��鏈��
// �E�T�[�o�[���̃��b�Z�[�W�g�U���́uio.emit( 'spread message', strMessage );�v�ɑ΂��鏈��
socket.on(
    'spread message',
    ( strMessage ) =>
    {
        console.log( 'spread message :', strMessage );

        // �g�U���ꂽ���b�Z�[�W�����b�Z�[�W���X�g�ɒǉ�
        const li_element = $( '<li>' ).text( strMessage );
        $( '#message_list' ).prepend( li_element ); // ���X�g�̈�ԏ�ɒǉ�
        //$( '#message_list' ).append( li_element );    // ���X�g�̈�ԉ��ɒǉ�
    } );
