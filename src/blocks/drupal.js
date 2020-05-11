module.exports = (base_url, id) => {
  const url = base_url + id
  const link = '<' + url + '|' + 'View my Drupal Profile>'

  return [
    {
      "type": "actions",
      "block_id": "drupal_profile",
      "elements": [
        {
          "type": "button",
          "text": {
            "type": "plain_text",
            "text": "Drupal Profile",
          },
          "value": "drupal_profile"
        }
      ],
    },
    {
      "type": "section",
      "text": {
        "type": "mrkdwn",
        "text": link
      }
    }
  ]
}