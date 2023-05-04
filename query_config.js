// Generate Malloy Query Mapping

class GenMalloyQuery {

    constructor() {
    }

    generateArticles() {
        return {
            "queryOne": {
                "articles": `
                    query: news2 -> {
                        where: generation_number = 0 and title != null and text != null
                        group_by: parent
                    }`
            }
        }
    }

    generateArticle(random) {
        if(random == undefined) {
            return {}
        }

        return {
            "queryTwo": {
                "article": `
                    query: news2-> {
                        where: parent = '${random}'
                        group_by: parent
                        nest: parent_details is {
                            where: generation_number = 0
                            group_by: title, text
                        }
                        nest: comments is {
                            where: generation_number > 0
                            aggregate: total_comments is count()
                        }
                        
                    }`
            }
        }
    }

}

module.exports.GenMalloyQuery = GenMalloyQuery;