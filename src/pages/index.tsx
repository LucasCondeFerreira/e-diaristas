import type { NextPage } from 'next'
import SafeEnvironment from 'ui/components/feedback/SafeEnvironment/SafeEnvironment'
import PageTitle from 'ui/components/data-display/PageTitle/PageTitle'
import UserInformation from 'ui/components/data-display/UserInformation/UserInformation'
import { TextFieldMask } from 'ui/components/inputs/TextFieldMask/TextFieldMask'

const Home: NextPage = () => {
  return (
    <div>
      <SafeEnvironment />
      <PageTitle
        title={'Conheça os profissionais'}
        subtitle={
          'Preencha seu endereço e veja todos os profissionais da sua localidade'
        }
      />
      <TextFieldMask
        mask={'99.999-999'}
        label={'Digite seu CEP'}
        variant={'outlined'}
        fullWidth
      />
      <UserInformation
        name={'Lucas'}
        picture={'https://github.com/LucasCondeFerreira.png'}
        rating={4.2}
        description={'RS'}
      />
    </div>
  )
}

export default Home
