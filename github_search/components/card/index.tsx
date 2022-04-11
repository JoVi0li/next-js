import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export const Card: React.FC = ({user}: any) => {
  return (
    <div>
      <div>
        <Image src={'https://avatars.githubusercontent.com/u/73193391?v=4'} width={100} height={100} alt='' />
        <div>
          <h1>Priscila Medeiros</h1>
          <span>@pri_medeiros</span>
        </div>
      </div>
      <div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Nisl, volutpat purus, duis ac vitae eget eget.
          Facilisi fermentum eleifend faucibus ut urna, duis.
          Ut sagittis, tempor, at adipiscing facilisis arcu.
          Elit fermentum, pulvinar semper interdum platea ut.
        </p>
      </div>
      <div>
        <div>
          <div>
            <Image src={'/icons/location.png'} width={36} height={36} alt='Ícone de um pin de localização' />
            <span>San Francisco</span>
          </div>
          <div>
            <Image src={'/icons/job.png'} width={36} height={36} alt='Ícone de uma maleta de trabalho' />
            <span>GitHub</span>
          </div>
        </div>
        <Link href={'#'} passHref>
          <Image
            src={'/icons/link.png'}
            width={48} height={48}
            alt='Ícone para ser redirecionado para a página no GitHub referente ao perfil'
          />
        </Link>
      </div>

    </div>
  );
}