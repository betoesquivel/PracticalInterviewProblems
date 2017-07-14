const textAreaElement = document.querySelector('textarea');
const serverCommentElement = document.querySelector('#server-comment');
const parsedServerCommentElement = document.querySelector('#parsed-server-comment');

const data = {
  beto: 'beto@mail.com',
  jorge: 'jorge@mail.com',
  'beto rodriguez': 'betordz@mail.com',
  'juan perez': 'juan@mail.com',
};

const parseCommentText =
  function parseCommentText(txt) {
    //change me
    return txt;
  }

const parseServerCommentData =
  function parseServerCommentData(commentData) {
    //change me
    return commentData;
  }

const updateCommentText =
  function updateCommentText(e) {
    const txt = e.target.value;

    const parsedText = parseCommentText(txt);
    serverCommentElement.innerText = parsedText;

    const parsedServerComment = parseServerCommentData(parsedText);
    parsedServerCommentElement.innerHTML = parsedServerComment;
  }

textAreaElement.addEventListener('input', updateCommentText);
