import { Document, Font, Page, StyleSheet, Text } from "@react-pdf/renderer";

Font.register({
    family: 'Oswald',
    src: 'https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf',
});

export const styles = StyleSheet.create({
    body: {
        paddingTop: 35,
        paddingBottom: 65,
        paddingHorizontal: 35,
    },
    title: {
        fontSize: 24,
        textAlign: 'center',
        fontFamily: 'Oswald',
    },
    author: {
        fontSize: 12,
        textAlign: 'center',
        marginBottom: 40,
    },
    subtitle: {
        fontSize: 18,
        margin: 12,
        fontFamily: 'Oswald',
    },
    paragraph: {
        margin: 12,
        fontSize: 14,
        textAlign: 'justify',
        fontFamily: 'Times-Roman',
    },
    pageNumber: {
        position: 'absolute',
        fontSize: 12,
        bottom: 30,
        left: 0,
        right: 0,
        textAlign: 'center',
        color: 'grey',
    },
});

export const Quixote = () => (
    <Document>
        <Page style={styles.body}>
            <Text style={styles.title}>Don Quijote de la Mancha</Text>
            <Text style={styles.author}>Miguel de Cervantes</Text>
            <Text style={styles.subtitle}>
                Capítulo I: Que trata de la condición y ejercicio del famoso hidalgo
            
            </Text>
            <Text style={styles.paragraph}>
                En un lugar de la Mancha, de cuyo nombre no quiero acordarme
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea amet rerum voluptate tempora laboriosam minima eum exercitationem. Debitis aliquam assumenda placeat autem, excepturi aliquid, labore voluptatem deserunt asperiores suscipit veniam.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam incidunt quo fuga, adipisci iusto enim deserunt ut, commodi necessitatibus nostrum, dicta debitis voluptate! Sequi veniam in voluptatum soluta. Commodi, laudantium!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit sed blanditiis est alias vitae molestias deserunt facere? Quis dolor harum, quo eum aut repellat rem ad tempora, repellendus autem distinctio.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat ex sit fugiat a recusandae debitis, sunt dignissimos dolores quod doloremque odit, qui omnis temporibus voluptas beatae eveniet magnam dolor provident?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, rem! Vitae, modi corrupti. Dolore delectus molestias, fugiat dicta deserunt in tempore laudantium, mollitia quasi, eum magni corporis. Ipsum, dignissimos officiis.
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque aut aperiam veniam iusto reiciendis nisi. Quibusdam, aliquam aliquid eum, nisi quia quam maxime eos voluptatum magni dolores, repellendus nam alias!
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis optio omnis eaque officiis illo. Tempora voluptatibus perspiciatis excepturi nesciunt illum suscipit ratione inventore deleniti, dolorem esse accusamus atque explicabo itaque.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis repellat vero fugit, tempora culpa commodi perferendis ad accusamus sit recusandae nam suscipit. Consequatur illum sit, reiciendis recusandae facilis ut vero?
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, quisquam. Deleniti, nemo harum aliquid sunt repudiandae a atque voluptates debitis ut, in explicabo, necessitatibus id ducimus magnam perferendis fugit. Autem.
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur cum veritatis, veniam nobis quod harum ea fugit doloremque nesciunt, incidunt laudantium enim natus deleniti maiores quisquam totam deserunt quam vitae.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore temporibus error voluptatibus quisquam debitis. Aperiam, corrupti blanditiis inventore corporis tempora esse quibusdam ad adipisci, quis sapiente ducimus placeat. Aut, quisquam?
           
           
            </Text>
            {/* Add more <Text> paragraphs as needed */}
            <Text
                style={styles.pageNumber}
                render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`}
                fixed
            />
        </Page>
    </Document>
);
