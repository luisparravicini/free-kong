/* keep encoding as iso-8859-1 */

class Level {

  constructor(screen) {
    this.screen = screen;
  }

  async draw() {
    let level = [
      ' SCORE=00000            LIVES=3 ',
      '          o                     ',
      '                        *  �    ',
      '    �           ���H����� �"�   ',
      '    ���H����       H    �_._._� ',
      '       H           H    ��_��� ',
      '       H           H     �_ _�  ',
      'o      H           H      _ _   ',
      '����H����������H����������������',
      '    H          H                ',
      ' �  H          H             �  ',
      '��������   ��������H��   �������',
      '                   H            ',
      '            �      H            ',
      '���H����������   �����   ��H����',
      '   H                       H    ',
      '   H                       H    ',
      ' �������H�����   ����H��������  ',
      '        H            H          ',
      '        H            H          ',
      '�H�������������H�������������H��',
      ' H             H             H  ',
      ' H             H             H  ',
      '��������������������������������',
    ];
    for (let i = 0; i < level.length; i++) {
      await this.screen.print(level[i]);
    }
  }

}
