import Navlink from '@/components/nav-link';
import { PersonSimpleCircleIcon, RadioIcon } from '@phosphor-icons/react';

export default function Navigation() {
  return (
    <nav className='nav'>
        <ul className='nav-list'>
          <li className='nav-li'>
            <Navlink 
              href='/about' 
              className='nav-link nav-about' 
              value="ABOUT"
              icon={PersonSimpleCircleIcon} 
            />
          </li>
          <li className='nav-li'>
            <Navlink 
              href='/contact' 
              className='nav-link nav-contact' 
              value='CONTACT'
              icon={RadioIcon}
            />
          </li>
        </ul>
      </nav>
  )
}
