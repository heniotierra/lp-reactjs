import {
    Table,
    Column,
    Model,
    PrimaryKey,
    DataType,
    CreatedAt,
    UpdatedAt,
} from "sequelize-typescript";

@Table({ tableName: "properties" })
class Property extends Model {
    @PrimaryKey
    @Column
    id!: number;
    @Column({ type: DataType.DOUBLE })
    price!: number;
    @Column({ type: DataType.DOUBLE })
    baths!: number;
    @Column
    beds!: number;
    @Column
    neighborhood!: string;
    @Column
    address!: string;
    @Column
    city!: string;
    @Column
    zipcode!: string;
    @Column
    available!: string;
    @Column
    image!: string;
    @Column
    type!: string;
    @Column({ type: DataType.INTEGER })
    yearBuilt!: number;
    @Column
    heating!: string;
    @Column
    parking!: string;
    @Column
    lot!: string;
    @Column({ type: DataType.INTEGER })
    stories!: number;
    @Column({ type: DataType.DOUBLE })
    anualTax!: number;
    @Column({ type: DataType.INTEGER })
    parcelNumber!: number;
    @Column({ type: DataType.DATEONLY })
    lastSold!: Date;
    @Column
    hasGarage!: boolean;
    @Column
    pool!: boolean;
    @Column
    virtualTourLink!: string;
    @Column({ type: DataType.INTEGER })
    totalVisits!: number;
    @Column({ type: DataType.DATEONLY })
    lastVisited!: Date;
    @Column({ type: DataType.DATE })
    @CreatedAt
    createdAt!: Date;
    @Column({ type: DataType.DATE })
    @UpdatedAt
    updatedAt!: Date;
    @Column({ type: DataType.ARRAY(DataType.STRING) })
    images!: string[];
};

export default Property;
