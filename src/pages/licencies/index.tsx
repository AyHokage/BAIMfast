import styles from './Licencies.module.css'
import PositionRelative from '@/components/PositionRelativeLayout/PositionRelativeLayout'
import Image from 'next/image'
import { useEffect } from 'react'

const Licencies = () => {
    
    return (
    <PositionRelative>
		<div className={styles.mainContainer}>
    	    <h1  className={styles.heading}>Лицензии</h1>

    	    <p className={styles.paragraph}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus laborum quia nisi est recusandae aspernatur rerum, fuga deserunt mollitia consequatur labore totam veniam eaque nemo dicta nobis sapiente ab obcaecati.
    	        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, consequatur. Voluptas, voluptatibus veritatis? Voluptates unde necessitatibus ullam amet, quos assumenda nobis debitis eveniet quis nulla incidunt officia laborum molestias animi.
    	    </p>
    	</div>

		<div className={styles.mainContainer}>
    	    <h2 className={styles.heading}>Пользовательские лицензии</h2>

    	    <p className={styles.paragraph}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus laborum quia nisi est recusandae aspernatur rerum, fuga deserunt mollitia consequatur labore totam veniam eaque nemo dicta nobis sapiente ab obcaecati.
    	        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, consequatur. Voluptas, voluptatibus veritatis? Voluptates unde necessitatibus ullam amet, quos assumenda nobis debitis eveniet quis nulla incidunt officia laborum molestias animi.
    	    </p>
    	</div>

		<div className={styles.cardsContainer}>
			<main className={styles.container}>
				<ul className={styles.cards}>
					<li className={`${styles.card} ${styles.card_1}`}>
						<div className={styles.card__content}>
							<div>
								<h2 className={styles.licenceTitle}>Клиентская лицензия на 50 р.м.</h2>
								<p className={styles.p}>1С:Предприятие 8. Клиентская лицензия на 50 р.м. Электронная поставка для Азербайджана</p>
							</div>
							<figure>
								<Image width={300} height={300} src="/business.gif" alt="Image description" />
							</figure>
						</div>
					</li>
					<li className={`${styles.card} ${styles.card_2}`}>
						<div className={styles.card__content}>
							<div>
								<h2 className={styles.licenceTitle}>Клиентская лицензия на 100 р.м.</h2>
								<p className={styles.p}>1С:Предприятие 8. Клиентская лицензия на 100 р.м. Электронная поставка для Азербайджана</p>
							</div>
							<figure>
								<Image width={300} height={300} src="/business.gif" alt="Image description" />
							</figure>
						</div>
					</li>
					<li className={`${styles.card} ${styles.card_3}`}>
						<div className={styles.card__content}>
							<div>
								<h2 className={styles.licenceTitle}>Клиентская лицензия на 300 р.м.</h2>
								<p className={styles.p}>1С:Предприятие 8. Клиентская лицензия на 300 р.м. Электронная поставка для Азербайджана</p>
							</div>
							<figure>
								<Image width={300} height={300} src="/business.gif" alt="Image description" />
							</figure>
						</div>
					</li>
					<li className={`${styles.card} ${styles.card_4}`}>
						<div className={styles.card__content}>
							<div>
								<h2 className={styles.licenceTitle}>Клиентская лицензия на 500 р.м.</h2>
								<p className={styles.p}>1С:Предприятие 8. Клиентская лицензия на 500 р.м. Электронная поставка для Азербайджана</p>
							</div>
							<figure>
								<Image width={300} height={300} src="/business.gif" alt="Image description" />
							</figure>
						</div>
					</li>
				</ul>
			</main>
		</div>

		<div className={styles.mainContainer}>
    	    <h2 className={styles.heading}>Серверные лицензии</h2>

    	    <p className={styles.paragraph}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus laborum quia nisi est recusandae aspernatur rerum, fuga deserunt mollitia consequatur labore totam veniam eaque nemo dicta nobis sapiente ab obcaecati.
    	        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, consequatur. Voluptas, voluptatibus veritatis? Voluptates unde necessitatibus ullam amet, quos assumenda nobis debitis eveniet quis nulla incidunt officia laborum molestias animi.
    	    </p>
    	</div>

		<div className={styles.cardsContainer}>
			<main className={styles.container}>
				<ul className={styles.cards}>
					<li className={`${styles.card} ${styles.card_1}`}>
						<div className={styles.card__content}>
							<div>
								<h2 className={styles.licenceTitle}>Сервер МИНИ на 5 подключений</h2>
								<p className={styles.p}>1С:Предприятие 8.3. Сервер МИНИ на 5 подключений. Электронная поставка для Азербайджана</p>
							</div>
							<figure>
								<Image width={300} height={300} src="/business.gif" alt="Image description" />
							</figure>
						</div>
					</li>
					<li className={`${styles.card} ${styles.card_2}`}>
						<div className={styles.card__content}>
							<div>
								<h2 className={styles.licenceTitle}>Лицензия на сервер</h2>
								<p className={styles.p}>1С:Предприятие 8.3. Лицензия на сервер. Электронная поставка для Азербайджана</p>
							</div>
							<figure>
								<Image width={300} height={300} src="/business.gif" alt="Image description" />
							</figure>
						</div>
					</li>
					<li className={`${styles.card} ${styles.card_3}`}>
						<div className={styles.card__content}>
							<div>
								<h2 className={styles.licenceTitle}>{`Лицензия на сервер (x86-64)`}</h2>
								<p className={styles.p}>{`1С:Предприятие 8.3. Лицензия на сервер (x86-64). Электронная поставка для Азербайджана`}</p>
							</div>
							<figure>
								<Image width={300} height={300} src="/business.gif" alt="Image description" />
							</figure>
						</div>
					</li>
				</ul>
			</main>
		</div>

		<div className={styles.mainContainer}>
    	    <h2 className={styles.heading}>Подзаголовок</h2>

    	    <p className={styles.paragraph}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus laborum quia nisi est recusandae aspernatur rerum, fuga deserunt mollitia consequatur labore totam veniam eaque nemo dicta nobis sapiente ab obcaecati.
    	        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, consequatur. Voluptas, voluptatibus veritatis? Voluptates unde necessitatibus ullam amet, quos assumenda nobis debitis eveniet quis nulla incidunt officia laborum molestias animi.
    	    </p>

			<p className={styles.paragraph}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus laborum quia nisi est recusandae aspernatur rerum, fuga deserunt mollitia consequatur labore totam veniam eaque nemo dicta nobis sapiente ab obcaecati.
    	        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, consequatur. Voluptas, voluptatibus veritatis? Voluptates unde necessitatibus ullam amet, quos assumenda nobis debitis eveniet quis nulla incidunt officia laborum molestias animi.
    	    </p>
    	</div>
		
		<div className={`${styles.lastContainer}`}>
    	    <h2 className={styles.heading}>Подзаголовок</h2>

    	    <p className={styles.paragraph}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus laborum quia nisi est recusandae aspernatur rerum, fuga deserunt mollitia consequatur labore totam veniam eaque nemo dicta nobis sapiente ab obcaecati.
    	        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, consequatur. Voluptas, voluptatibus veritatis? Voluptates unde necessitatibus ullam amet, quos assumenda nobis debitis eveniet quis nulla incidunt officia laborum molestias animi.
    	    </p>

			<p className={styles.paragraph}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus laborum quia nisi est recusandae aspernatur rerum, fuga deserunt mollitia consequatur labore totam veniam eaque nemo dicta nobis sapiente ab obcaecati.
    	        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, consequatur. Voluptas, voluptatibus veritatis? Voluptates unde necessitatibus ullam amet, quos assumenda nobis debitis eveniet quis nulla incidunt officia laborum molestias animi.
    	    </p>
    	</div>



    </PositionRelative>
    )
}

export default Licencies