function createQuoteSlide(quote) {
  const { pic_url, name, title, text } = quote;

  const slide = $('<div>').addClass('carousel-item');
  const row = $('<div>').addClass('row mx-auto align-items-center').appendTo(slide);
  const imgCol = $('<div>').addClass('col-12 col-sm-2 col-lg-2 offset-lg-1 text-center').appendTo(row);
  const img = $('<img>').attr({
      'src': pic_url,
      'alt': 'Carousel Pic'
  }).addClass('d-block align-self-center').appendTo(imgCol);
  const textCol = $('<div>').addClass('col-12 col-sm-7 offset-sm-2 col-lg-9 offset-lg-0').appendTo(row);
  const quoteText = $('<div>').addClass('quote-text').appendTo(textCol);
  const p = $('<p>').addClass('text-white').text(text).appendTo(quoteText);
  const h4 = $('<h4>').addClass('text-white font-weight-bold').text(name).appendTo(quoteText);
  const span = $('<span>').addClass('text-white').text(title).appendTo(quoteText);

  return slide;
}

$(document).ready(function () {
  const carouselInner = $('.quotes .carousel-inner');
  const loader = $('.loader');

  loader.show();

  $.ajax({
      url: 'https://smileschool-api.hbtn.info/quotes',
      type: 'GET',
      success: function (quotes) {
          loader.hide();
          carouselInner.empty();

          $.each(quotes, function (index, quote) {
              const slide = createQuoteSlide(quote);
              if (index === 0) {
                  slide.addClass('active');
              }
              carouselInner.append(slide);
          });
      },
      error: function (error) {
          loader.hide();
          console.error('Error:', error);
      }
  });
});
// task 2

function createPopularSlide(video) {
    const { thumb_url, title, 'sub-title': subTitle, duration, author_pic_url, author } = video;
  
    const videoCard = $('<div>').addClass('card-video-group h-100');
    const thumbnailContainer = $('<div>').addClass('position-relative').appendTo(videoCard);
    $('<img>').attr({
        'src': thumb_url,
        'alt': 'Video Thumbnail'
    }).addClass('card-img-top').appendTo(thumbnailContainer);
    $('<img>').attr({
        'src': 'images/play.png',
        'alt': 'Play Button'
    }).addClass('rounded-circle mr-2 play-overlay position-absolute').appendTo(thumbnailContainer);
    const cardBody = $('<div>').addClass('card-body').appendTo(videoCard);
    $('<h4>').addClass('card-title').text(title).appendTo(cardBody);
    $('<h5>').addClass('card-subtitle mb-2 text-muted').text(subTitle).appendTo(cardBody);
    const avatarcontainer = $('<div>').addClass('d-flex align-items-center').appendTo(cardBody);
    $('<img>').attr({
        'src': author_pic_url,
        'alt': 'Avatar'
    }).addClass('rounded-circle mr-2 avatar').appendTo(avatarcontainer);
    $('<p>').addClass('mb-0').text(author).appendTo(avatarcontainer);
    const metadatacontainer = $('<div>').addClass('d-flex justify-content-between mt-2').appendTo(cardBody);
    const starRating = $('<div>').addClass('star-rating').appendTo(metadatacontainer);
    $('<img>').attr({
        'src': 'images/star_on.png',
        'alt': 'Star On'
    }).appendTo(starRating);
    $('<p>').addClass('mb-0').text(duration).appendTo(metadatacontainer);

    return videoCard;
  }

  $(document).ready(function () {
    const carouselInner = $('.popular .carousel-inner');
    const loader = $('.loader');
    // to fetch and render the data
    function populartutorials() {
        const inner = $('.popular .carousel-inner');
        const loader = $('.popular .loader');
        
        loader.show();
        
      $.ajax({
            url: 'https://smileschool-api.hbtn.info/popular-tutorials',
            type: 'GET',
            success: function (videos) {
                loader.hide();
                carouselInner.empty();
                
                for (let i = 0; i < videos.length; i += 4)  {
                    const videoGroup = $('<div>').addClass('carousel-item');
                    if (i === 0) {
                     videoGroup.addClass('active');
                    }
                    const row = $('<div>').addClass('row').appendTo(videoGroup);
                    for (let j = i; j < i + 4 && j < videos.length; j++) {
                        const videoCard = createPopularSlide(videos[j]);
                        videoCard.addClass('col-12 col-sm-6 col-lg-3'); // Adjust as needed
                        row.append(videoCard);
                    }
                    carouselInner.append(videoGroup);
                }
             },

            error: function (error) {
                loader.hide();
                console.error('Error:', error);
            }
        });
         } 
            populartutorials();
});
// task 3

function createLatestSlide(video) {
    const { thumb_url, title, 'sub-title': subTitle, duration, author_pic_url, author } = video;
  
    const videoCard = $('<div>').addClass('card-video-group h-100');
    const thumbnailContainer = $('<div>').addClass('position-relative').appendTo(videoCard);
    $('<img>').attr({
        'src': thumb_url,
        'alt': 'Video Thumbnail'
    }).addClass('card-img-top').appendTo(thumbnailContainer);
    $('<img>').attr({
        'src': 'images/play.png',
        'alt': 'Play Button'
    }).addClass('rounded-circle mr-2 play-overlay position-absolute').appendTo(thumbnailContainer);
    const cardBody = $('<div>').addClass('card-body').appendTo(videoCard);
    $('<h4>').addClass('card-title').text(title).appendTo(cardBody);
    $('<h5>').addClass('card-subtitle mb-2 text-muted').text(subTitle).appendTo(cardBody);
    const avatarcontainer = $('<div>').addClass('d-flex align-items-center').appendTo(cardBody);
    $('<img>').attr({
        'src': author_pic_url,
        'alt': 'Avatar'
    }).addClass('rounded-circle mr-2 avatar').appendTo(avatarcontainer);
    $('<p>').addClass('mb-0').text(author).appendTo(avatarcontainer);
    const metadatacontainer = $('<div>').addClass('d-flex justify-content-between mt-2').appendTo(cardBody);
    const starRating = $('<div>').addClass('star-rating').appendTo(metadatacontainer);
    $('<img>').attr({
        'src': 'images/star_on.png',
        'alt': 'Star On'
    }).appendTo(starRating);
    $('<p>').addClass('mb-0').text(duration).appendTo(metadatacontainer);

    return videoCard;
  }

  $(document).ready(function () {
    const carouselInner = $('.Latest .carousel-inner');
    const loader = $('.loader');
    // to fetch and render the data
    function Latestvideos() {
        loader.show();
        
      $.ajax({
            url: 'https://smileschool-api.hbtn.info/latest-videos',
            type: 'GET',
            success: function (videos) {
                loader.hide();
                carouselInner.empty();
                
                for (let i = 0; i < videos.length; i += 4)  {
                    const videoGroup = $('<div>').addClass('carousel-item');
                    if (i === 0) {
                     videoGroup.addClass('active');
                    }
                    const row = $('<div>').addClass('row').appendTo(videoGroup);
                    for (let j = i; j < i + 4 && j < videos.length; j++) {
                        const videoCard = createLatestSlide(videos[j]);
                        videoCard.addClass('col-12 col-sm-6 col-lg-3'); 
                        row.append(videoCard);
                    }
                    carouselInner.append(videoGroup);
                }
             },

            error: function (error) {
                loader.hide();
                console.error('Error:', error);
            }
        });
         } 
            Latestvideos();
});
// task 5
function createcourses(video) {
    const { thumb_url, title, 'sub-title': subTitle, duration, author_pic_url, author } = video;
    // const { topics, sorts, q} = filters;
    // const topicselect = $('<a>'). addClass('dropdown-menu mt-0').appendTo(filters);
    // $('<a>'). attr({
        
    // })


    const videoCard = $('<div>').addClass('card border-0 col-12 col-sm-6 col-md-3 card-deck');
    const thumbnailContainer = $('<div>').addClass('card border-0 d-flex flex-column').appendTo(videoCard);
    $('<img>').attr({
        'src': thumb_url,
        'alt': 'Video Thumbnail'
    }).addClass('card-img-top').appendTo(thumbnailContainer);
    $('<img>').attr({
        'src': 'images/play.png',
        'alt': 'Play Button'
    }).addClass('rounded-circle mr-2 play-overlay position-absolute').appendTo(thumbnailContainer);
    const cardBody = $('<div>').addClass('card-body px-2').appendTo(videoCard);
    $('<h4>').addClass('card-title').text(title).appendTo(cardBody);
    $('<h5>').addClass('card-subtitle mb-2 text-muted').text(subTitle).appendTo(cardBody);
    const avatarcontainer = $('<div>').addClass('d-flex align-items-center').appendTo(cardBody);
    $('<img>').attr({
        'src': author_pic_url,
        'alt': 'Avatar'
    }).addClass('rounded-circle mr-2 avatar').appendTo(avatarcontainer);
    $('<p>').addClass('mb-0').text(author).appendTo(avatarcontainer);
    const metadatacontainer = $('<div>').addClass('d-flex justify-content-between mt-2').appendTo(cardBody);
    const starRating = $('<div>').addClass('star-rating').appendTo(metadatacontainer);
    $('<img>').attr({
        'src': 'images/star_on.png',
        'alt': 'Star On'
    }).appendTo(starRating);
    $('<p>').addClass('mb-0').text(duration).appendTo(metadatacontainer);

    return videoCard;
  }
  function newselection(data) {
	if (data.topics.length > 0) {
		let topic = data.topics[0].replace(/_/g, ' ');
		$('.box2 .btn span').text(topic);
	}

	if (data.sorts.length > 0) {
		let sort = data.sorts[0].replace(/_/g, ' ');
		$('.box3 .btn span').text(sort);
	}
    
}

  function filterselection(courseselector, url, query = '', topic = 'all', sort = 'most_popular') {
    
      $.get(url, { q: query, topic: topic, sort: sort}, function (data) {
        $(courseselector).empty();
        loader.hide();
        console.log(`data fetched for ${courseselector}: `, data);
        $('#keywords').val(data.q);
        
        $('.box2 .dropdown-menu').html('');
        data.topics.forEach(topic => {
            // topic = topic.replace(/_/g, ' ');
            $('.box2 .dropdown-menu').append(`<a class="dropdown-item" href="#">${topic}</a>`);
        });

        $('.box3 .dropdown-menu').html('');
        data.sorts.forEach(sort => {
            // sort = sort.replace(/_/g, ' ');
            $('.box3 .dropdown-menu').append(`<a class="dropdown-item" href="#">${sort}</a>`);
        });

        newselection(data);
    
        $('#section-title').html(`<span class="text-muted video-count">${data.courses.length} videos</span>`);

            data.courses.forEach((video) => {
            const card = createcourses(video);
            $(courseselector).append(card);       
        });

        $('.box2 .dropdown-menu'). on('click', function (e) {
            e.prevenDefault();
            $('.box2 .btn span').text($(this).text());
            filterselection('#courses-list', ApiUrl, $('.search-text-area').val(), $(this).text(), $('.box3 .btn span').text());
        });

        $('.box3 .dropdown-menu'). on('click', function (e) {
            e.prevenDefault();
            $('.box3 .btn span').text($(this).text());
            filterselection('#courses-list', ApiUrl, $('.search-text-area').val(), $(this).text(), $('.box2 .btn span').text());
        });
  });
  
}

$(function () {
    console.log("Document is ready");
  
    const ApiUrl = "https://smileschool-api.hbtn.info/courses";
  
    filterselection('#courses-list', ApiUrl);
  
    $.get(ApiUrl, function (data) {
        newselection(data);
        filterselection('#courses-list', ApiUrl);
    });

    $('.search-text-area').on('change', function () {
      filterselection('#courses-list', ApiUrl, $(this).val(), $('.box2 .btn span').text(), $('.box3 .btn span').text());
    });
  });
