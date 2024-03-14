import React from 'react'
import '../App.css'
import CountUp from 'react-countup'
import { CardPlayer } from '../Components/CardPlayer'
import { Header } from '../Components/Header'
import { Footer } from '../Components/Footer'
import QuestionSections from '../Components/QuestionSections'
import RankSection from '../Components/RankSection'
import TestmonialSection from '../Components/TestmonialSection'

export const Home = () => {
  return (
    <div>
      <Header />
      <section className="articalSection">
          <div>
            <article>
              <p>
                Our commitment to all-round development shines in diverse extracurricular activities.
              </p>
              <p>( Our Students love that! )</p>
            </article>
            <CardPlayer
              heading="Swimming"
              description="22 Acres, Pollution- Free, World-Class."
              source='https://s3-alpha-sig.figma.com/img/0805/aac5/4ba7a2e8b502c70814e51c05d023bce1?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BwMie0ePzus2aiR9pJUMXZItA6FWFxZCeYs352MxlT3s5ajiaKfPcbooSuju7cB-jMAwH2lsz8neSW2W65RiC72mpkAB2QMzvbmwnQOigCn6zzFXj1qNqSesJ27ZSXsJJN5zKsQybAIREatK2LYvLY4gCEcuM8E7MGMY8bi1hBI6TJOKcJqDXyw5xCeSeAa1CpqMSRBbHLSQgtO6EtNwnFMKvAIviGCZE4Q10VdhY0xhH8-PEUl66IdZQCQvIhT1Vf8z9lOG6-mMQVv2XivqX8gPJMm~~UFjsgAdXKdcn27ME3opFcGz5P4QPzPGaEvWAHyOf8T26K7ZFhba4uu8~Q__'
            />
            <button>
                SEE ALL ACTIVITIES
                <span>arrow_right_alt</span>
            </button>
          </div>
          <div>
              <img src='https://s3-alpha-sig.figma.com/img/bf56/d53b/e4ae8c11aa3b517d3b5f05edfa67ced4?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fMHpbwP7USeuVo5tcjxx6vEboXa1YAJkPT34MU02u4SmkzJmhqohazql5GYBUAxx~1MCdIvmLbvpI2awK0zMKJdXv6x2V12q0ttTbiTfXk7-GMgMr3RIoRwS6eoYXZXxJMzEAOlREWbbiL47jmI3zePluBDppCkMZPQQk6XFglKzJkB8-Ffj-Qc5ff~YcXdP-7gvwkhzwsKnYEBfEHs3CsURyrpHpdBO8x~nt2hl-7i5WLJI~NOEFFlP9zeyY7a9dPidMymLyzTS4598YL-I22fIsG7UxAzwy05xeyPWQmAbnCBBfwF3l6vXWLWRcyxv1GvbJ5qvSA2VM2wL6EZxOA__' />
          </div>
          <div>
            <CardPlayer 
              heading="Taekwondo"
              description="22 Acres, Pollution- Free, World-Class."
              source='https://s3-alpha-sig.figma.com/img/f6c9/6040/f9653461eb9b6309e40f102bf5863b7e?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=daEeT0vzcucrZD7ZMzkM90bIM7bP7sUK8OlfQXFPMGKYj7u3WzRgyrSroM76ov9vPkDrDj37ERVHPTthrdeoFmJWFh89hJNsIa~hS5TZqzLzu-9PN~12Wk26IcngvFcYWzT6CEmRVsclFGIJvByXK~U1j6yRBtZzGn7Qv-EZVNoYZ0uA-mrwkuip1piZVQ7iXJ-5dJ8iuYEEQggH0tzbkfesFyMB9z-LG25tJ7BHDc4r9yYwM3mw-Per8zy4NTC8uiJpdvYHbQ3jyV3jGuDl6d8bDF4bpQtQR-Q2eO-i4Pbb6~v6WW6Mm8jj6gZL-QQjZDJJeyoOTFMQv6N~DrOMEQ__'
            />
            <CardPlayer 
              heading="Horse Riding"
              description="22 Acres, Pollution- Free, World-Class."
              source='https://s3-alpha-sig.figma.com/img/4e0a/c460/2c0383f400220dcb63e7c93c7e04b629?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=h5TrP94pPaUA8~e0LDL5Td3ECiGjji-Y1e5ReSqyKlyzRhp27py4SRXrcTyierP~Du-XLAL1eblvjpwFP5bLIp7m-ApH01641XGNHUSoXXS~U12ubvyurWYYsNnV1J-q9lUxDJWIZ06uy3j58Ak4k-c-ch5COOtcDmniHlbLgiT~TpfTHysYp7I67SwDj0trndKtq7CH69pTA-Pkgxs3OXyG6IizFfFhbX4tpuPyXyc8LEf-gQgVYAvf2KTUC8TXrPsqXHVhhZn-T6fi-VrMXZnzTw0qxMGoVLUgQs6fXM8C2G4cB6bfjujDCfSqDci9s7pB8mTt~8C5iWFxsWNzww__'
            />
          </div>
      </section>
      <section className="videoSection">
        <div style={{backgroundImage: `url(https://s3-alpha-sig.figma.com/img/a28b/9f5f/b3c65245636894337842651c84e28ada?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hGIdhsECkBBA6ZEicDZNtsLwhOeEprV62dk061u6lL-N0kAVQj1Z9D~OjRTApZrpmA-wwdW9bvnHixg~wN5CFhIIUlwq~wqJj~vvPHSOgmvKjS5TeEYP7aRQrAhqjNzqVXUar7ZDCQfsyxl5jOktszJDPMQoi3YnqrQNiIM-5lSpZzv89OcK5u5B9qB6FF6nTnb2Jy7Zh~WbS6ZEMbm~8OuC~D-HrTrwsuzKvWFcCKs7WSKK3HufvRfFBqsr66-lfj55GBuLxP2kurAZs219F3hfsR6QDAXLqhz1fTBsoRv3e~StxwhVWg8bljDGNrxSJ5wsPGtwjNk-zNX2-XNBCQ__)`}}>
          <div>
    
          </div>
        </div>
      </section>
      <TestmonialSection/>
      <section className="questionSection">
        <h1>Why <span>TIS?</span></h1>
        <div>
          <h3>A FOCUS ON...</h3>
          <h3>MANAGEMENT</h3>
          <p>
            Extremely Friendly and Approachable Management. Tula’s International School combines – respect for tradition with a progressive application of modern sciences, academic rigour with a caring heart, and individual appreciation with the warmth of a school community
          </p>
        </div>
       <QuestionSections/>
      </section>
      <section className="reportSection">
          <div style={{backgroundImage: 'url(https://s3-alpha-sig.figma.com/img/7cf4/46c5/f6e6d5ff663185ebfe4c11e8dc6be6ac?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fD7r~93HJUxi-fQsSxBsqt5FM3ocF~BEOfeiQ~7r0iDqNAW5KkvOtS1vEpoQi8~NGLrkPZLgN-eXnzfU9itpZe1m7WQEpS2B4aaWMSowtEfZcglXruUyrhxaAI2q08LD5dC91J42yBUVowSZWMP2J6hkt7-aAAskj3kZwSPx3JOtKBdjEoPKHpnwVuth0-JH0Va~D3wCq9ZEXc2lW5P8pXlgIjaa7sLrz9GJn09TY45up67pnKLj9-UzrqZKvfwPK~KQ-cvR~eou3NFLgAIxH9~iQgNib32OWyKLLsLzg3c10srr1VTnNR15lQzNRgZp9gTIXs5ledj-qvlwXJJf0g__)'}}>
              <img src='https://s3-alpha-sig.figma.com/img/8187/6eca/bf05a2072f3b706ad72b30d96eba0a0b?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Xz4o~5PXe6pr7tS0f7DU2kzUUNy11nxS0k58r51jZ3HCwILW3vTrEq896IBEoO8MHuZIIKu0Vie6T63Njuf~j-iJrO5jgaRP1gzukKZdjX4epvjp2ZowPP0Mng~RvlvxaBWR1-rOTKPgwF80F-m8ulrF572HBvpPoSKwLiqpiYdoWrE3ytp4IzVLaqmXo11UlHrNM8-yTdpPcvdfdX-SuG4L69tcsn3DX3kG2nilrsulZyWOudy692FT~xZyjnX5cPoK-GS53asvmujDEXo8iLnZDJYRqb6DWavPrQuMF7ps3UZl06m7uvWppiOFDVhaoTbRe9rWFREHblIo5Cj-Lg__' />
              <div>
                <h3>DIVINE INTO OUR...</h3>
                <h3>VIRTUAL TOUR</h3>
              </div>
          </div>
          <div>
            <div>
                <CountUp
                  end={100}
                  suffix='%'
                />
                <p>College Acceptance</p>
            </div>
            <div>
                <CountUp
                  end={20}
                />
                <p>Years of Educational Excellence</p>
            </div>
            <div>
                <CountUp
                  end={60}
                  suffix='%'
                />
                <p>STEM Program Participation</p>
            </div>
            <div>
                <CountUp
                  end={15}
                  suffix='+'
                />
                <p>Extracurricular Activities</p>
            </div>
          </div>
      </section>
      <section className="articalSection" style={{flexDirection: 'row-reverse', paddingTop: 0}}>
          <div>
            <article>
              <p>
                Our commitment to all-round development shines in diverse extracurricular activities.
              </p>
              <p>( Our Students love that! )</p>
            </article>
            <CardPlayer 
              heading="Swimming"
              description="22 Acres, Pollution- Free, World-Class."
              source='https://s3-alpha-sig.figma.com/img/0805/aac5/4ba7a2e8b502c70814e51c05d023bce1?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BwMie0ePzus2aiR9pJUMXZItA6FWFxZCeYs352MxlT3s5ajiaKfPcbooSuju7cB-jMAwH2lsz8neSW2W65RiC72mpkAB2QMzvbmwnQOigCn6zzFXj1qNqSesJ27ZSXsJJN5zKsQybAIREatK2LYvLY4gCEcuM8E7MGMY8bi1hBI6TJOKcJqDXyw5xCeSeAa1CpqMSRBbHLSQgtO6EtNwnFMKvAIviGCZE4Q10VdhY0xhH8-PEUl66IdZQCQvIhT1Vf8z9lOG6-mMQVv2XivqX8gPJMm~~UFjsgAdXKdcn27ME3opFcGz5P4QPzPGaEvWAHyOf8T26K7ZFhba4uu8~Q__'
            />
            <button>
                SEE ALL ACTIVITIES
                <span>arrow-right-alt</span>
            </button>
          </div>
          <div>
              <img src='https://s3-alpha-sig.figma.com/img/bf56/d53b/e4ae8c11aa3b517d3b5f05edfa67ced4?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fMHpbwP7USeuVo5tcjxx6vEboXa1YAJkPT34MU02u4SmkzJmhqohazql5GYBUAxx~1MCdIvmLbvpI2awK0zMKJdXv6x2V12q0ttTbiTfXk7-GMgMr3RIoRwS6eoYXZXxJMzEAOlREWbbiL47jmI3zePluBDppCkMZPQQk6XFglKzJkB8-Ffj-Qc5ff~YcXdP-7gvwkhzwsKnYEBfEHs3CsURyrpHpdBO8x~nt2hl-7i5WLJI~NOEFFlP9zeyY7a9dPidMymLyzTS4598YL-I22fIsG7UxAzwy05xeyPWQmAbnCBBfwF3l6vXWLWRcyxv1GvbJ5qvSA2VM2wL6EZxOA__' />
          </div>
          <div>
            <CardPlayer 
              heading="Taekwondo"
              description="22 Acres, Pollution- Free, World-Class."
              source='https://s3-alpha-sig.figma.com/img/f6c9/6040/f9653461eb9b6309e40f102bf5863b7e?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=daEeT0vzcucrZD7ZMzkM90bIM7bP7sUK8OlfQXFPMGKYj7u3WzRgyrSroM76ov9vPkDrDj37ERVHPTthrdeoFmJWFh89hJNsIa~hS5TZqzLzu-9PN~12Wk26IcngvFcYWzT6CEmRVsclFGIJvByXK~U1j6yRBtZzGn7Qv-EZVNoYZ0uA-mrwkuip1piZVQ7iXJ-5dJ8iuYEEQggH0tzbkfesFyMB9z-LG25tJ7BHDc4r9yYwM3mw-Per8zy4NTC8uiJpdvYHbQ3jyV3jGuDl6d8bDF4bpQtQR-Q2eO-i4Pbb6~v6WW6Mm8jj6gZL-QQjZDJJeyoOTFMQv6N~DrOMEQ__'
            />
            <CardPlayer 
              heading="Horse Riding"
              description="22 Acres, Pollution- Free, World-Class."
              source='https://s3-alpha-sig.figma.com/img/4e0a/c460/2c0383f400220dcb63e7c93c7e04b629?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=h5TrP94pPaUA8~e0LDL5Td3ECiGjji-Y1e5ReSqyKlyzRhp27py4SRXrcTyierP~Du-XLAL1eblvjpwFP5bLIp7m-ApH01641XGNHUSoXXS~U12ubvyurWYYsNnV1J-q9lUxDJWIZ06uy3j58Ak4k-c-ch5COOtcDmniHlbLgiT~TpfTHysYp7I67SwDj0trndKtq7CH69pTA-Pkgxs3OXyG6IizFfFhbX4tpuPyXyc8LEf-gQgVYAvf2KTUC8TXrPsqXHVhhZn-T6fi-VrMXZnzTw0qxMGoVLUgQs6fXM8C2G4cB6bfjujDCfSqDci9s7pB8mTt~8C5iWFxsWNzww__'
            />
          </div>
      </section>
      <RankSection/>
      <section className="parentsSection">
          <div>
            <h1>From The</h1>
            <h1>Parents</h1>
            <hr />
            <p>What stands out to us is the school's emphasis on individualized attention. Our child's teachers have been attentive to their unique needs, providing the support and encouragement necessary for their academic success.</p>
          </div>
          <div>
            <div style={{backgroundImage: 'url(https://s3-alpha-sig.figma.com/img/392c/29fe/e4d43468a1452bed17fbfca8c86b428f?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gppbA51q8U33hhsiX7rzCDjyqX7c58xFsK16EgwCoN4XdZ4VI-BeMdHrU5SawW5BX82ixqsKsFvnm9Unq6EAtdOipHWQDGP7GXVjyBm6HHIp-g6yk7LF~T0a-9TWPHzIZ3KpToENRiO2f9p7W1Xf83fGviJ0aIiy7yWv10Dt3KpdLpJ~akiQINvnWvE~etWBzmvjnOdun73Pe8JaAzCwV3-PJKntw6rqbYkPfqzqQVGkyznbT7cNbBVMWq3fbgHaHRvyHu-SD0fYgFzPZf9WbUA1G8ci8BVvR9gV~faipWbjPb7Hd54d-Kh0zqMPNKMt2SLJ8RFGKLhxGL0k9y3CDQ__)'}}>
              <span>Play-Circle</span>
            </div>
            <div>

            </div>
          </div>
      </section>
      <Footer />
    </div>
  )
}