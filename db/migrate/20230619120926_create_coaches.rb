class CreateCoaches < ActiveRecord::Migration[7.0]
  def change
    create_table :coaches do |t|
      t.string :name
      t.string :filter

      t.timestamps
    end
  end
end
