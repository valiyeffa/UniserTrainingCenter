import { Component } from '@angular/core';

@Component({
  selector: 'app-home-third-section',
  imports: [],
  templateUrl: './home-third-section.html',
  styleUrl: './home-third-section.scss',
})
export class HomeThirdSection {
  newsData = [
    {
      image: 'images/newsImage/Container.png',
      title: 'Uniser və AzTU arasında "Gələcəyin Mühəndislik Texnologiyaları" mövzusunda yeni memorandum imzalandı',
      text: 'Mərkəzimiz AzTU ilə əməkdaşlıq çərçivəsində tələbələrin istehsalat təcrübəsini artırmaq məqsədilə innovativ laboratoriya dərslərinə mərkəzimiz AzTU ilə əməkdaşlıq çərçivəsində tələbələrin istehsalat təcrübəsini artırmaq məqsədilə innovativ laboratoriya dərslərinə.',
      date: '16 Fevral',
      isHighlighted: true,
      category: 'Universitet xəbərləri'
    },
    {
      image: 'images/newsImage/news1.png',
      title: '"Sənayedə Yaşıl Enerji keçidi" – Uniser-də kecilien nese teskil edilib.',
      text: 'Mərkəzimiz AzTU ilə əməkdaşlıq çərçivəsində tələbələrin istehsalat təcrübəsini artırmaq.',
      date: '14 Fevral',
      isHighlighted: false,
      category: 'Universitet xəbərləri'
    },
    {
      image: 'images/newsImage/news2.png',
      title: 'Uniser Təlim Mərkəzinin nümayəndəsi təşrif edib.',
      text: 'Mərkəzimiz AzTU ilə əməkdaşlıq çərçivəsində tələbələrin istehsalat təcrübəsini artırmaq.',
      date: '12 Fevral',
      isHighlighted: false,
      category: 'Universitet xəbərləri'
    },
    {
      image: 'images/newsImage/news3.png',
      title: 'Türkiyənin qabaqcıl texnoparkları ilə görüş baş tutub.',
      text: 'Mərkəzimiz AzTU ilə əməkdaşlıq çərçivəsində tələbələrin istehsalat təcrübəsini artırmaq.',
      date: '1 Fevral',
      isHighlighted: false,
      category: 'Universitet xəbərləri'
    },
    {
      image: 'images/newsImage/news3.png',
      title: '"Sənayedə Yaşıl Enerji keçidi" – Uniser-də təşkil edilib qonaqlar gelib.',
      text: 'Mərkəzimiz AzTU ilə əməkdaşlıq çərçivəsində tələbələrin istehsalat təcrübəsini artırmaq.',
      date: '18 Yanvar',
      isHighlighted: false,
      category: 'Universitet xəbərləri'
    },

  ];

  announcementData = [
    {
      date: '14 Fevral',
      title: 'Leyla Həsənovanın "İnformasiya təhlükəsizlik" konfransi'
    },
    {
      date: '12 Fevral',
      title: 'Rauf Əliyevin "Maşınqayıtmada avtomatlasdirma" konfrans'
    },
    {
      date: '10 Fevral',
      title: 'Aygün Rəsulovanın rəhbərliyi ilə "Data Analitika" konfrans'
    },
    {
      date: '18 Yanvar',
      title: 'Leyla Həsənovanın "İnformasiya təhlükəsizlik" konfransi'
    },
    {
      date: '14 Yanvar',
      title: 'Rauf Əliyevin "Maşınqayıtmada avtomatlasdirma" konfrans'
    },
    {
      date: '10 Yanvar',
      title: 'Aygün Rəsulovanın rəhbərliyi ilə "Data Analitika" konfrans'
    },
  ]
}
