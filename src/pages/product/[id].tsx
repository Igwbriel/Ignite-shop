import { useRouter } from 'next/router'
import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from '../../styles/pages/product'

export default function Product() {
  const { query } = useRouter()

  return (
    <ProductContainer>
      <ImageContainer></ImageContainer>

      <ProductDetails>
        <h1> Camiseta X</h1>
        <span>R$ 79,90</span>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta amet
          dolorem rerum incidunt asperiores qui? Tempora amet ipsa perspiciatis
          quaerat at, quam explicabo quas excepturi temporibus inventore minus?
          Dicta, odio?
        </p>

        <button>Comprar agora</button>
      </ProductDetails>
    </ProductContainer>
  )
}
