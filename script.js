'use strict'

const allReadBtn = document.querySelector('.navigation__notifications-btn')
const notifications = document.querySelectorAll('.notification')
const unreadNotificationsElement = document.querySelector('.unread-notifications')

let unreadNotificationsCount = 0

const updateCount = function() {
   const unreadNotifications = [...notifications].filter(f => f.classList.contains('unread'))
   unreadNotificationsCount = unreadNotifications.length
   unreadNotificationsElement.textContent = unreadNotificationsCount
}

notifications.forEach(e => {
   e.addEventListener('click', function(el) {
      const clicked = el.target.closest('.notification')
      clicked.classList.toggle('unread')
      updateCount()
   })
})

//remove unread class from all notifications
allReadBtn.addEventListener('click', function() {
   notifications.forEach(el => {
      el.classList.remove('unread')
   })
   updateCount()
})



