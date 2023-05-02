interface AvatarProps {
  /**
   * Fonte da imagem de avatar
   */
  src: string;
  /**
   * Texto alternativo do avatar (nome do aluno)
   */
  alt: string;
  /**
   * Tamanho da imagem em pixels (padrão: 50px)
   */
  size: number;
}

export default function Avatar(props: AvatarProps) {
  return (
    <img src={props.src} alt={props.alt} style={{ borderRadius: "50%", width: props.size || 50 }} />
  );
}
