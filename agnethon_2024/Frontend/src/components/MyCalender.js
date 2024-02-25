import React from 'react';
import './css/Calendar.css'
const MyCalender = () => {
  return (
    <div className="container">
      <h2>Events Schedule</h2>
<div class="timeline"> 
  <div class="timeline__event  animated fadeInUp delay-3s timeline__event--type1">
    <div class="timeline__event__icon ">
      <i class="lni-cake"></i>

    </div>
    <div class="timeline__event__date">
    10-02-2024
    </div>
    <div class="timeline__event__content ">
      <div class="timeline__event__title">
        Enthusia
      </div>
      <div class="timeline__event__description">
        <p>The Event is Schedule for 15 days on this time</p>
        <p><b>Place : Quad</b></p>
        <p><b>Duration : 10:00 AM - 12:00 PM</b></p>
      </div>
    </div>
  </div>
  <div class="timeline__event animated fadeInUp delay-2s timeline__event--type2">
    <div class="timeline__event__icon">
      <i class="lni-burger"></i>

    </div>
    <div class="timeline__event__date">
      12-02-2024
    </div>
    <div class="timeline__event__content">
      <div class="timeline__event__title">
        Pratibimb
      </div>
      <div class="timeline__event__description">
      <p>The Event is Schedule for 15 days</p>
        <p><b>Place : Auditorioum</b></p>
        <p><b>Duration : 02:00 PM - 03:00 PM</b></p>
      </div>
    </div>
  </div>
  <div class="timeline__event animated fadeInUp delay-1s timeline__event--type3">
    <div class="timeline__event__icon">
      <i class="lni-slim"></i>

    </div>
    <div class="timeline__event__date">
      13-02-2024
    </div>
    <div class="timeline__event__content">
      <div class="timeline__event__title">
        ECell
      </div>
      <div class="timeline__event__description">
      <p>The Event is Schedule for 15 days</p>
        <p><b>Place : TPO Hall</b></p>
        <p><b>Duration : 05:00 PM - 05:30 PM</b></p>
      </div>

    </div>
  </div>
  <div class="timeline__event animated fadeInUp timeline__event--type1">
    <div class="timeline__event__icon">
      <i class="lni-cake"></i>

    </div>
    <div class="timeline__event__date">
      14-02-2024
    </div>
    <div class="timeline__event__content">
      <div class="timeline__event__title">
        Rangwardhan
      </div>
      <div class="timeline__event__description">
      <p>The Event is Schedule for 15 days</p>
        <p><b>Place : Quad</b></p>
        <p><b>Duration : 06:00 AM - 09:00 PM</b></p>
      </div>
    </div>
  </div>

</div>
    </div>
  );
};

export default MyCalender;
