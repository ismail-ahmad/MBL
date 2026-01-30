import Image from 'next/image';
import SubSection from '@/components/subSection';
import SubSectionMedia from '@/components/subSectionMedia';
import SubSectionText from '@/components/subSectionText';
import HomeForm from '@/components/homeForm';

export default function Home() {
  return (
    <>
      <section className='homepageHero'>
      <div className='logoWrapper'>
        <Image src='/logo.webp' alt='Manhattan Beach Law Logo' width={240} height={61} className='logo' />
      </div>
      <div className='heroContent'>
        <div className='heroHeadingWrapper'><p className='heroHeading'>The Highest Quality Legal Services To Our Valued South Bay Clients</p></div>
        <div className='ctaContainer'>
          <a href="tel:3106637030" className='heroCTAButton'>(310) 663-7030</a>&ensp;<span style={{color: 'white', fontSize: 22, borderLeftWidth: 1, borderLeftStyle: 'solid', borderLeftColor: 'white', marginLeft: 1, marginRight: 1}}></span>&ensp;<a href="mailto:info@manhattanbeach.law" className='heroCTAButton'>info@manhattanbeach.law</a>
        </div>
      </div>
    </section>
    <SubSection subSectionClassName='introToMBLSubSection' className="introToMBL" heading='Introducing ManhattanBeach.law'>
      <SubSectionMedia className='introToMBLMedia'>
        <iframe className="youtubeVideo" data-ux="Embed" allowFullScreen={true} type="text/html" frameBorder={0} src="https://youtube.com/embed/LZWAELmwhfc?rel=0&amp;showinfo=0&amp;autoplay=1&amp;loop=1&amp;muted=1&amp;controls=0" data-aid="VIDEO_IFRAME_RENDERED"></iframe>
      </SubSectionMedia>
      <SubSectionText className='introToMBLText'>
        {/* styles={{width: '100%', justifyContent: 'center', alignItems: 'center', padding: '0 24px 48px'}} */}
        <p>
            We’re excited to introduce ManhattanBeach.law - a brand new, innovative law practice, committed to providing the highest quality legal services to our South Bay clients, all at an <strong>exceptional</strong> value
          </p>
          <p>
            We formed ManhattanBeach.law as a full service, <strong>one-stop</strong> shop for all your legal needs. We ask you for the opportunity to be <strong>your</strong> attorney. We won’t disappoint you.  
          </p>
      </SubSectionText>
    </SubSection>
    <SubSection subSectionClassName='jeffBriggsSubSection' className="jeffBriggs" h={2} heading='Meet Managing Partner Jeff Briggs'>
      <SubSectionMedia className='jeffBriggsMedia'>
        {/* styles={{width: '100%', padding: '0 24px 48px'}} */}
        <Image src={'/gm.webp'} width={453} height={341} alt='' className='introImage'/>
      </SubSectionMedia>
      <SubSectionText className='jeffBriggsText'>
        {/* styles={{width: '100%', justifyContent: 'center', alignItems: 'center', padding: '0 24px 48px'}} */}
        <p>Jeff moved to the South Bay after graduating from UCLA, and he’s been here ever since. He’s raising his family here. His kids go to Grand View, and soon will be moving on to MBMS and Costa. He feels very fortunate to be a part of our wonderful South Bay community.</p>
          <p>Jeff’s practice includes complex, multiparty litigation in both federal and state courts. Over the many years of practice, he’s learned how to build a fantastic legal team, and where to best focus effort and attention to achieve the best results on behalf of his valued clients. We are extremely proud of the exceptional attorneys and legal professionals that we’ve assembled for our clients at ManhattanBeach.law.</p>
      </SubSectionText>
    </SubSection>
    <SubSection  heading='Serious, Life Changing Personal Injuries' h={2}>
      <SubSectionMedia>
        <Image src={'/life changing injuries.webp'} width={431} height={215} alt='' className='introImage sectionImage'/>
      </SubSectionMedia>
      <SubSectionText>
        <p> Our skilled personal injury team handles <strong>only</strong> catastrophic, life changing injuries and wrongful death cases. We are extremely selective with the injury cases we accept, and if we take <strong>your</strong> case, we will give it the attention, focus and priority it deserves. Unlike other firms that handle hundreds or even <strong>thousands</strong> of personal injury cases at a time, we do not mix your serious injury case with dog bites, fender benders or slip and falls at the local grocery store. We simply don’t accept those types of cases. We put our energy and focus on serious injury cases <strong>only</strong>, where it belongs.</p>
      </SubSectionText>
    </SubSection>
    <SubSection  heading='Business Litigation and Transactions' h={2}>
      <SubSectionMedia>
        <Image src={'/busniness litigation and transactions.webp'} width={431} height={215} alt='' className='introImage sectionImage'/>
      </SubSectionMedia>
      <SubSectionText>
        <p> ManhattanBeach.law has a <strong>full-service</strong> business litigation and transactional team, which serves a complete range of business matters including dispute resolution, litigation – both plaintiff and defense, crafting and reviewing contracts and agreements, employment and contractor issues and disputes, real estate and construction matters, pursuing claims and collecting money due, and most importantly, doing what we do best - helping our clients avoid and solve their problems</p>
      </SubSectionText>
    </SubSection>
    <SubSection  heading='Results Driven, Efficient Legal Services' h={2}>
      <SubSectionMedia>
        <Image src={'/efficient legal services.webp'} width={431} height={215} alt='' className='introImage sectionImage'/>
      </SubSectionMedia>
      <SubSectionText>
        <p>At ManhattanBeach.law we are committed to quickly, efficiently and favorably resolving disputes on behalf of our clients. In our experience, unfortunately, far too often, attorneys tell clients what they <strong>want to hear</strong>, a best-case outcome, rather than advising them on the most probable result, based on applying the facts to the law.</p>
        <p>What happens next? The client sets their expectations on a best case only outcome, locks into that position, and ends up paying a massive amount of attorneys’ fees pursuing that pie in the sky - only to reach a conclusion, months or years later, that could and should have been reached early on.</p>
        <p>In this situation, there is only one winner - the lawyer - who hauled in huge attorneys’ fees for completely unproductive and non-result oriented legal services. Unfortunately, far too many lawyers feed off of, and even prolong disputes, which is a benefit to them only, rather than working towards a solution quickly, efficiently and favorably on behalf of their clients.</p>
        <p>At ManhattanBeach.law, our approach is completely different: We measure success not by the size of our bill, or the length of our representation, but by <strong>outcomes</strong> – achieving the <strong>best results</strong> for our valued clients, in the most efficient and cost-effective way. As we see it, our job is to get in, solve the problem favorably and efficiently, and get out.</p>
      </SubSectionText>
    </SubSection>
    <SubSection  heading='Value Driven Fees and Billing' h={2}>
      <SubSectionMedia>
        <Image src={'/Results oriented.webp'} width={431} height={215} alt='' className='introImage sectionImage'/>
      </SubSectionMedia>
      <SubSectionText>
        <p>When it comes to our fees, we reject the all too common “take it or leave it” attitude. Rather, we maintain <strong>flexibility</strong> in our billing arrangements, so we can best meet the needs and the budgets of our valued clients. For serious injury cases, our contingency fees are as low as 25%, and our business litigation and transactional team maintains very reasonable hourly rates. Despite how self-important some attorneys seem to think they are, an hourly rate of $1000 or more is, in our view, completely ridiculous.</p>
        <p>In addition to our reasonable rates, our billing practices are also very efficient and client-focused. Unlike other firms, you’ll <strong>never</strong> see charge for a quick phone call or a follow-up email. Our attorneys do NOT have minimum billable hours, and we only bill for work that is substantive and meaningful towards a successful outcome for our clients.</p>
      </SubSectionText>
    </SubSection>
    <SubSection  heading='Give Us The Opportunity To Be Your Lawyer' h={2}>
      <SubSectionMedia>
        <Image src={'/choose us.webp'} width={431} height={215} alt='' className='introImage sectionImage'/>
      </SubSectionMedia>
      <SubSectionText>
        <p>Bottom line, if you or someone close to you has been seriously injured, or if you need business litigation or any legal transactional services, please reach out to us: Call us, or send us an email or text. The consultation is <strong>always free</strong> of charge.</p>
      </SubSectionText>
    </SubSection>
    <SubSection  heading='Specialty Legal Work' h={2}>
      <SubSectionMedia>
        <Image src={'/specialty legal work.webp'} width={431} height={215} alt='' className='introImage sectionImage'/>
      </SubSectionMedia>
      <SubSectionText>
        <p>If you have a legal matter that requires a particular specialty: Family Law, Wills and Trusts, Probate, Tax, Bankruptcy, Intellectual Property or Securities, please reach out to us – over the years, we’ve developed a fantastic network of top specialist attorneys, and we would be happy to refer them to you, <strong>always free</strong> of charge.</p>
      </SubSectionText>
    </SubSection>
    <div className='southbayWrapper' style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignContent: 'center', padding: '0 24px'}}>
      <div className='southbayContainer'>
        <Image className='southbayimage' src={'/southbay advisor.png'} width={5400} height={4200} alt='' />
      </div>
    </div>
    <SubSection subSectionClassName='contactUsSubSection' className='ContactUsSection' heading={'Contact Us'}>
      {/* styles={{flexDirection: 'row', flex: 1, gap: '48px'}} */}
      <div className="contactUsFormWrapper">
        <HomeForm />
      </div>
      <div className="footerCTAButtons">
        <h4 style={{color: 'rgb(24, 25, 25)', fontWeight: 400, margin: '0 0 24px', fontFamily: 'var(--font-source-sans-3)', fontSize: '22px', textAlign: 'center'}}>ManhattanBeach.Law</h4>
        <div style={{display: 'flex', flexFlow: 'column nowrap', justifyContent: 'center', alignContent: 'center'}}>
          <a href="tel:3106637030" style={{color: 'rgb(86, 92, 94)', fontFamily: 'var(--font-source-sans-3)', textAlign: 'center'}} >(310) 663-7030</a>
          <a href="mailto:info@manhattanbeach.law" style={{color: 'rgb(86, 92, 94)', fontFamily: 'var(--font-source-sans-3)', textAlign: 'center'}} >info@manhattanbeach.law</a>
        </div>
      </div>
    </SubSection>
    <footer className='footer'>
      <p>Copyright © 2025 ManhattanBeach.Law - All Rights Reserved</p>
    </footer>
    </>
  );
}
