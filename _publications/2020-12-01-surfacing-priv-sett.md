---
title: "Surfacing Privacy Settings using Semantic Matching"
collection: publications
permalink: /publications/2020-12-01-surfacing-priv-sett
excerpt: 'Online services utilize privacy settings to provide users with control over their data. However, these privacy settings are often hard to locate, causing the user to rely on provider-chosen default values. In this work, we train privacy settings centric encoders and leverage them to create an interface that allows users to search for privacy settings using free-form queries.'
date: 2020-11-01
venue: 'Proceedings of the Second Workshop on Privacy in NLP'
paperurl: 'https://www.aclweb.org/anthology/2020.privatenlp-1.4.pdf'
citation: 'Rishabh Khandelwal, Asmit Nayak*, Yao Yao*, Kassem Fawaz. (2020). &quot;Surfacing Privacy Settings Using Semantic Matching&quot; 
<i>Proceedings of the Second Workshop on Privacy in NLP</i>.'
---
Online services utilize privacy settings to provide users with control over their data. However, these privacy settings are often hard to locate, causing the user to rely on provider-chosen default values. In this work, we train privacy settings centric encoders and leverage them to create an interface that allows users to search for privacy settings using free-form queries. To achieve this, we create a custom Semantic Similarity dataset, which consists of real user queries covering various privacy settings. We then use this dataset to fine-tune the state of the art encoders. Using these fine-tuned encoders, we perform semantic matching between the user queries and the privacy settings to retrieve the most relevant setting. Finally, we also use these encoders to generate embeddings of privacy settings from the top 100 websites and perform unsupervised clustering to learn about the online privacy settings types.

[Download paper here](https://www.aclweb.org/anthology/2020.privatenlp-1.4.pdf)